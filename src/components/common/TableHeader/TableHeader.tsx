import { TableHead, TableHeaderCell, TableRow } from '@tremor/react';

type TableHeaderProps = {
  header: string[];
};

export const TableHeader = (props: TableHeaderProps) => {
  const { header } = props;

  return (
    <TableHead className="sticky top-0">
      <TableRow>
        {header.map((value, index) => (
          <TableHeaderCell className={index == 0 ? 'sticky left-0 z-50 bg-white' : ''}>{value}</TableHeaderCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
