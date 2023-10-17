import { Table, TableBody } from '@tremor/react';

import { TableContent } from '@/components/common/TableContent/TableContent';
import { TableHeader } from '@/components/common/TableHeader/TableHeader';

type TableComponentProps = {
  label?: string;
};

export const TableComponent = (props: TableComponentProps) => {
  const {} = props;
  const header = [
    '社員名',
    'HTML',
    'CSS',
    'React',
    'Vue',
    'Tailwind',
    'HTML',
    'CSS',
    'React',
    'Vue',
    'Tailwind',
    'HTML',
    'CSS',
    'React',
    'Vue',
    'Tailwind',
    'HTML',
    'CSS',
    'React',
    'HTML',
    'CSS',
    'React',
    'Vue',
    'Tailwind',
  ];
  const content = ['Tanaka Ryunosuke', '1', '1', '2', '3', '4', '5', '6', '7', '90', '0', '3', '2', '32', '2', '3', '3', '23', '3', '1', '3', '2', '2', '3'];
  return (
    <>
      <Table>
        <TableHeader header={header} />
        <TableBody>
          <TableContent contents={content} />
          <TableContent contents={content} />
          <TableContent contents={content} />
          <TableContent contents={content} />
          <TableContent contents={content} />
          <TableContent contents={content} />
          <TableContent contents={content} />
          <TableContent contents={content} />
          <TableContent contents={content} />
        </TableBody>
      </Table>
    </>
  );
};
