import { TableCell, TableRow } from '@tremor/react';

type TableContentProps = {
  contents: string[];
};

export const TableContent = (props: TableContentProps) => {
  const { contents } = props;
  return (
    <TableRow>
      {contents.map((value, index) => (
        <TableCell key={index} className={index == 0 ? 'sticky left-0 z-10 bg-white' : ' text-center'}>
          {value}
        </TableCell>
      ))}
    </TableRow>
  );
};
