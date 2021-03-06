import { CollectionReference, Timestamp } from "firebase-admin/firestore";
import { head } from "lodash";

import { MessageData, MessageDoc } from "../docs/message";
import { FireCollection } from "../lib/fire-collection";

export class MessagesCollection extends FireCollection<MessageData, MessageDoc> {
  constructor(ref: CollectionReference) {
    super(ref, (snap) => new MessageDoc(snap));
  }

  async paginatedMessages({ first, after }: { first: number; after: Timestamp | null | undefined }) {
    return after
      ? this.findManyByQuery((ref) => ref.orderBy("createdAt", "desc").startAfter(after).limit(first))
      : this.findManyByQuery((ref) => ref.orderBy("createdAt", "desc").limit(first));
  }

  async latest() {
    return this.findManyByQuery((ref) => ref.orderBy("createdAt", "desc").limit(1)).then((docs) => head(docs));
  }
}
