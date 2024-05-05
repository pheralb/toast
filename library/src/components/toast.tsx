import { useState, type FC } from 'react';
import type { Position, ToastProps, Variant } from '../types/toast.types';
import '../styles/toast-component.css';

import { Error, Info, Success, Warning } from '../icons';
import { useTimeout } from '../hooks/useTimeout';
import { classNames } from '../utils';

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

interface ToastComponentProps extends ToastProps {
  toastPosition: Position;
  onClose?: () => void;
}

const Toast = (props: ToastComponentProps) => {
  const IconComponent = icons[props.variant];
  const [isExiting, setIsExiting] = useState<boolean>(false);
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

  const ANIMATION_ENTER_MAP: Record<Position, string> = {
    'top-left': 't_slide-top',
    'top-right': 't_slide-top',
    'bottom-left': 't_slide-bottom',
    'bottom-right': 't_slide-bottom',
    'bottom-center': 't_slide-bottom',
  };

  const ANIMATION_EXIT_MAP: Record<Position, string> = {
    'top-left': 't_slide-left',
    'top-right': 't_slide-right',
    'bottom-left': 't_slide-left',
    'bottom-right': 't_slide-right',
    'bottom-center': 't_slide-bottom-exit',
  };

  const animationClass = isExiting
    ? ANIMATION_EXIT_MAP[props.toastPosition]
    : ANIMATION_ENTER_MAP[props.toastPosition];

  return (
    <div className={classNames('t_global', animationClass)}>
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
