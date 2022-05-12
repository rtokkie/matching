import { authorize } from "../../../authorize";
import { Context } from "../../../context";
import { MessageDoc } from "../../../fire/docs/message";
import { MessageRoomEventDoc } from "../../../fire/docs/message-room-event";
import { MutationCreateMessageArgs } from "../../../graphql/generated";

export const createMessageMutation = async (
  _: unknown,
  { input }: MutationCreateMessageArgs,
  { auth, collections: { messageRoomsCollection, messageRoomEventsCollection } }: Context
) => {
  authorize(auth);

  const messageRoom = await messageRoomsCollection.findOne(input.messageRoomId);
  if (!messageRoom.isMember(auth.uid)) throw new Error("can't createMessage, because not a messageRoom member");

  const message = MessageDoc.create(messageRoom.messagesCollection, { userId: auth.uid, content: input.content });
  const messageRoomEvent = MessageRoomEventDoc.create(messageRoomEventsCollection, {
    action: "CREATE",
    messageRoomId: messageRoom.id,
    messageId: message.id,
  });

  await message.save();
  await messageRoomEvent.save();

  return message;
};
