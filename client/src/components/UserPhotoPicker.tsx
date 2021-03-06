import { ArrowBackIcon, ArrowForwardIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Image, Input, Stack, useDisclosure, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { BiUpload } from "react-icons/bi";

import { useFileInput } from "../hooks/common/useFileInput";
import { CropImageModal } from "./case/CropImageModal";

type UserPhotoCardProps = { photoUrl: string; onUp: () => void; onDown: () => void; onRemove: () => void };

const UserPhotoCard: FC<UserPhotoCardProps> = ({ photoUrl, onUp, onDown, onRemove }) => {
  return (
    <VStack>
      <Image src={photoUrl} boxSize="36" rounded="md" />
      <HStack>
        <Button size="sm" onClick={onUp}>
          <ArrowBackIcon />
        </Button>
        <Button size="sm" onClick={onDown}>
          <ArrowForwardIcon />
        </Button>
        <Button size="sm" onClick={onRemove}>
          <DeleteIcon />
        </Button>
      </HStack>
    </VStack>
  );
};

type UserPhotoPickerProps = {
  photoUrls: string[];
  onPick: (file: File) => void;
  onUp: (index: number) => void;
  onDown: (index: number) => void;
  onRemove: (index: number) => void;
};

export const UserPhotoPicker: FC<UserPhotoPickerProps> = ({ photoUrls, onPick, onUp, onDown, onRemove }) => {
  const modal = useDisclosure();
  const [croppingFile, setCroppingFile] = useState<File>();
  const { ref, value, onClick, onChange } = useFileInput();

  const onClose = () => {
    setCroppingFile(undefined);
    modal.onClose();
  };

  const onOk = (file: File) => {
    onPick(file);
    onClose();
  };

  useEffect(() => {
    if (!value) return;
    setCroppingFile(value);
    modal.onOpen();
  }, [value]);

  return (
    <Stack>
      <Box>
        <Button size="sm" onClick={onClick} leftIcon={<BiUpload />}>
          写真を追加する
        </Button>
        <Input type="file" accept="image/*" hidden ref={ref} onChange={onChange} />
        <Box>
          {croppingFile && <CropImageModal file={croppingFile} isOpen={modal.isOpen} onClose={onClose} onOk={onOk} />}
        </Box>
      </Box>

      {photoUrls.length > 0 && (
        <Wrap>
          {photoUrls.map((url, index) => (
            <WrapItem key={index}>
              <UserPhotoCard
                photoUrl={url}
                onUp={() => onUp(index)}
                onDown={() => onDown(index)}
                onRemove={() => onRemove(index)}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </Stack>
  );
};
