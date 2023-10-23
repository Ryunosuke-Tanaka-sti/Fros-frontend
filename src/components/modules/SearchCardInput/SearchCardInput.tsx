import { useState } from 'react';

import { TextInput } from '@tremor/react';

import { ButtonComponent } from '@/components/common/ButtonComponent/ButtonComponent';
import { CardTitle } from '@/components/common/CardTitle/CardTitle';
import { DividerComponent } from '@/components/common/Divider/Divider';

type SearchCardInputProps = {
  title: string;
  onClick: (value: string) => void;
};

export const SearchCardInput = (props: SearchCardInputProps) => {
  const { title, onClick } = props;
  const [text, setText] = useState<string>('');
  return (
    <div className="flex w-96 flex-col items-center gap-3 rounded-lg border-4 border-main-sub p-3">
      <CardTitle title={title} />
      <DividerComponent />
      <TextInput value={text} placeholder="value input ..." onChange={(value) => setText(value.currentTarget.value)} />
      <ButtonComponent color="main" text="検索" onClick={() => onClick(text)} />
    </div>
  );
};
