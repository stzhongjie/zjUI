import React from 'react';
import { connect } from 'react-redux'
import Modal from '../../components/Modal/index'

interface Props {
  ifShow: boolean
}

const App:React.FC<Props> = (props: any) => {
  const hideModal = () => {
    props.closeModal()
    console.log('props: ', props);
  }
  const onok = () => {
    console.log('点击了确认');
    props.add()
    props.closeModal()
    
  }
  return (
    <Modal
      visible={props.visible}
      onOk={onok}
      onCancel={hideModal}
    >
      <div>弹层内容1</div>
      <div>弹层内容2</div>
      <div>弹层内容3</div>
      {props.num}
    </Modal>
  );
}
//  将state映射到组件的props
const mapStateToProps = (state) => {
  return state
}

//  将action映射到组件的props
const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch({ type: 'close' }),
    add: () => dispatch({ type: 'add' })
  }
}
const ShowModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ShowModal;
