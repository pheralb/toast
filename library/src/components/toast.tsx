import { useState, type FC } from 'react';
import type {
  Position,
  ToastPropsWithVariant,
  Variant,
} from '../types/toast.types';
import '../styles/toast-component.css';

import { Error, Info, Loading, Success, Warning } from '../icons';
import { useTimeout } from '../hooks/useTimeout';
import { classNames, prefersReducedMotion } from '../utils';

const icons: Record<Variant, FC<React.SVGProps<SVGSVGElement>>> = {
  success: Success,
  error: Error,
  warning: Warning,
  info: Info,
  loading: Loading,
};

const iconsColors: Record<Variant, string> = {
  success: '#22c55e',
  error: '#ef4444',
  warning: '#eab308',
  info: '#3b82f6',
  loading: '#6b7280',
};

interface ToastComponentProps extends ToastPropsWithVariant {
  toastPosition: Position;
  onClose: () => void;
}

const Toast = (props: ToastComponentProps) => {
  const IconComponent = props.variant ? icons[props.variant] : Info;
  const [isExiting, setIsExiting] = useState<boolean>(false);

  const delayDuration = props.delayDuration || 4000;

  const { pauseTimer, resumeTimer } = useTimeout(() => {
    handleCloseToast();
  }, delayDuration);

  const handleCloseToast = () => {
    setIsExiting(true);
    const animationDisabled = prefersReducedMotion();
    if (!animationDisabled) {
      setTimeout(() => {
        if (props.onClose) {
          props.onClose();
        }
      }, 300);
    } else if (props.onClose) {
      props.onClose();
    }
  };

  const handleMouseLeave = () => {
    resumeTimer();
  };

  const handleMouseEnter = () => {
    pauseTimer();
  };

  const ANIMATION_ENTER_MAP: Record<Position, string> = {
    'top-left': 't_slide-top',
    'top-right': 't_slide-top',
    'top-center': 't_slide-top',
    'bottom-left': 't_slide-bottom',
    'bottom-right': 't_slide-bottom',
    'bottom-center': 't_slide-bottom',
  };

  const ANIMATION_EXIT_MAP: Record<Position, string> = {
    'top-left': 't_slide-left',
    'top-right': 't_slide-right',
    'top-center': 't_slide-top-exit',
    'bottom-left': 't_slide-left',
    'bottom-right': 't_slide-right',
    'bottom-center': 't_slide-bottom-exit',
  };

  const animationClass = isExiting
    ? ANIMATION_EXIT_MAP[props.toastPosition]
    : ANIMATION_ENTER_MAP[props.toastPosition];

  return (
    <div
      title={props.text}
      aria-label="Notification"
      className={classNames(
        't_global',
        prefersReducedMotion() ? '' : animationClass,
        props.theme === 'dark' ? 't_dark-theme' : '',
        props.theme === 'light' ? 't_light-theme' : '',
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="t_container">
        {props.variant && !props.icon ? (
          <IconComponent
            width={18}
            height={18}
            style={{ fill: iconsColors[props.variant] }}
            className="t_icon"
          />
        ) : (
          props.icon && <div className="t_icon">{props.icon}</div>
        )}
        <div className="t_content">
          <p>{props.text}</p>
          {props.description && <p>{props.description}</p>}
        </div>
      </div>
      <div className="t_actions">
        {props.action && (
          <button onClick={props.action.onClick} title="Action button">
            {props.action.text ?? 'Action'}
          </button>
        )}
        <button onClick={handleCloseToast} title="Close toast">
          Close
        </button>
      </div>
    </div>
  );
};

export default Toast;
