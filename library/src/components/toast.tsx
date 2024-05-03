import { useState, type FC } from 'react';
import type { ToastProps, Variant } from '../types/toast.types';
import '../styles/toast-component.css';

import { Error, Info, Success, Warning } from '../icons';
import { useTimeout } from '@/hooks/useTimeout';

const fillColors: Record<Variant, string> = {
  success: '#2ecc71',
  error: '#e74c3c',
  warning: '#f39c12',
  info: '#121212',
};

const icons: Record<Variant, FC<React.SVGProps<SVGSVGElement>>> = {
  success: Success,
  error: Error,
  warning: Warning,
  info: Info,
};

const Toast = (props: ToastProps) => {
  const IconComponent = icons[props.variant];
  const [isExiting, setIsExiting] = useState<boolean>(false);

  const animationDuration = 400;
  const delayDuration = props.delayDuration || 4000;

  const handleCloseToast = () => {
    setIsExiting(true);
    setTimeout(() => {
      props.onClose && props.onClose();
    }, 300);
  };

  useTimeout(() => {
    handleCloseToast();
  }, delayDuration);

  return (
    <div
      className="t_global"
      style={{
        animation: `${isExiting ? 'slideRight' : 'slideDown'} ${animationDuration}ms ease-in-out`,
      }}
    >
      <div className="t_container">
        {props.icon ? (
          props.icon
        ) : (
          <IconComponent
            width={props.iconSize || 18}
            height={props.iconSize || 18}
            fill={fillColors[props.variant]}
          />
        )}
        <div className="t_content">
          <p>{props.text}</p>
          {props.description && <p>{props.description}</p>}
        </div>
      </div>
      <div className="t_actions">
        <button onClick={props.action}>Action</button>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
};

export default Toast;
