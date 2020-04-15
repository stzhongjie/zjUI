import React from 'react';
import { connect } from 'react-redux'
import Button from '../components/Button/index'
import ShowModal from './components/modal'
interface Props {

}
const Pages: React.FC<Props> = (props:any) => {

  const show = () => {
    props.showModal()
  }
  return (
    <div className="zjUi">
      <Button btnType="primary" disable={true} onClick={show}>
        显示
      </Button>
      <ShowModal />
      <img src="../../public/logo192.png" alt="1"/>
    </div>
  );
}

//  将state映射到组件的props
const mapStateToProps = (state) => {
  return {
    visible: state.visible,
    num: state.num
  }
}

//  将action映射到组件的props
const mapDispatchToProps = (dispatch) => {
  return {
    showModal: () => dispatch({ type: 'show' })
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pages)
export default App;
