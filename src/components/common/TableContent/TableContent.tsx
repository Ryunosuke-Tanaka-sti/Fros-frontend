import { TableCell, TableRow } from '@tremor/react';

type TableContentProps = {
  contents: string[];
};

export const TableContent = (props: TableContentProps) => {
  const { contents } = props;
  return (
    <TableRow>
      {contents.map((value, index) => (
        <TableCell key={index} className={index == 0 ? 'sticky left-0 bg-white' : ''}>
          {value}
        </TableCell>
      ))}
    </TableRow>
  );
};
