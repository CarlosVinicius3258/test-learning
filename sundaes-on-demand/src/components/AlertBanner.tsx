import { info } from 'console';
import React from 'react';
import { Alert } from 'react-bootstrap';


interface AlertBannerProps {
  msg?: string,
  variant?: AlertBannerVariant | 'danger';
}

enum AlertBannerVariant {
  danger = 'red',
  success = 'green',
  info = 'blue',
  warning = 'yellow'

}

function AlertBanner({ msg = 'An unexpected error ocurred. Please try again later.', variant = 'danger' }: AlertBannerProps) {
  return (
    <Alert variant={ variant } style={ { backgroundColor: variant } }>
      { msg }
    </Alert>
  );
}

export default AlertBanner;