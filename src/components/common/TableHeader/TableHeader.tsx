import { TableHead, TableHeaderCell, TableRow } from '@tremor/react';

type TableHeaderProps = {
  header: string[];
};

export const TableHeader = (props: TableHeaderProps) => {
  const { header } = props;

  return (
    <TableHead className="sticky top-0 z-20 bg-white">
      <TableRow>
        {header.map((value, index) => (
          <TableHeaderCell className={index == 0 ? 'sticky left-0 z-30 bg-white' : ' text-center'}>{value}</TableHeaderCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
