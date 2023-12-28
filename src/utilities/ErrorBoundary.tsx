import React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

import axios from 'axios';

import { ButtonComponent } from '@/components/common/ButtonComponent/ButtonComponent';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  console.error(error);
  if (axios.isAxiosError(error) && error.response)
    return (
      <>
        <ButtonComponent color="error" text="エラーが発生しました" onClick={resetErrorBoundary} />
      </>
    );
  return (
    <>
      <ButtonComponent color="error" text="エラーが発生しました" onClick={resetErrorBoundary} />
    </>
  );
};

type Props = {
  children: React.ReactNode;
};
export const ErrorBoundaryComponent = (props: Props) => {
  const { children } = props;

  return <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>;
};
