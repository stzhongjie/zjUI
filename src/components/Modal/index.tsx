import React, { useState, useEffect } from 'react';
import './index.scss';
import Button from '../Button/index'
/**
 * 对话框 Modal
 * @param { className } string 对话框类名
 * @param { visible } boolean 对话框显隐
 * @param { footer } boolean 是否展示底部按钮
 * @param { okText } string 确认按钮文字
 * @param { cancelText } string 取消按钮文字
 * @param { onOk } func 点击确认按钮
 * @param { onCancel } func 点击取消按钮
 * 
 */

function Modal(props) {
  const { children, className, visible, footer, okText, cancelText, onOk, onCancel } = props
  let [ifVisible, setVisible] = useState(!visible)
  useEffect(() => {
    setVisible(() => {
      return visible
    })
  }, [visible]);

  return (
    <div>
      <div className='aaa'></div>
      {
        ifVisible
          ?
          <div className={`modal-ui ${className}`}>
            <div className="modalContent" style={{ left: '50%', marginLeft: '-260px', top: '100px' }}>
              <div className="modalHead">
                标题
                <span className="iconfont icon-close" onClick={onCancel}></span>
              </div>
              <div className="modalBody">
                {children}
              </div>
              {
                footer === false
                  ?
                  null
                  :
                  <div className="modalFooter">
                    <Button disable={true} onClick={onCancel}>
                     {
                       cancelText ? cancelText : '取消'
                     }
                    </Button>
                    <Button btnType="primary" disable={true} onClick={onOk}>
                     {
                       okText ? okText : '确认'
                     }
                    </Button>
                  </div>
              }
            </div>
            <div className="modalMark"></div>
          </div >
          :
          null
      }
    </div>
  );
}

export default Modal;
