import { useState } from 'react';

import { SearchSelect, SearchSelectItem } from '@tremor/react';

import { ButtonComponent } from '@/components/common/ButtonComponent/ButtonComponent';
import { CardTitle } from '@/components/common/CardTitle/CardTitle';
import { DividerComponent } from '@/components/common/Divider/Divider';
import { NameToID } from '@/types/Common';

type SearchCardSelectProps = { title: string; searchList?: NameToID[]; onClick: (select: string) => void };

export const SearchCardSelect = (props: SearchCardSelectProps) => {
  const { title, searchList, onClick } = props;
  const [select, onSelect] = useState('');
  return (
    <div className="flex w-96 flex-col items-center gap-3 rounded-lg border-4 border-main-sub p-3">
      <CardTitle title={title} />
      <DividerComponent />
      <SearchSelect value={select} onValueChange={onSelect}>
        {searchList ? (
          searchList.map((value) => (
            <SearchSelectItem key={value.id} value={value.id}>
              {value.name}
            </SearchSelectItem>
          ))
        ) : (
          <></>
        )}
      </SearchSelect>
      <ButtonComponent color="main" text="検索" onClick={() => onClick(select)} />
    </div>
  );
};
