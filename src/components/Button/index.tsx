import React from 'react';
import './index.scss';

/**
 * 按钮 Button
 * @param { className } string 按钮类名
 * @param { btnType } string 按钮类型 primary | default | dashed | link
 * @param { size } string 按钮大小 large | default | small
 * @param { disabled } boolean 按钮是否禁用 true | false
 * @param { onClick } func 按钮点击
 */

function Button(props) {
  const { children, className, btnType, onClick, size, disabled} = props
  return (
    <div className={`button-ui ${btnType} ${size ? size : 'default'} ${disabled ? 'disabled' : ''} ${className ? className : ''}`} onClick={onClick}>
      { children }
    </div>
  );
}

export default Button;
