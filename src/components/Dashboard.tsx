import React from 'react';
import {connect} from "react-redux";
import {AppState} from "../store/configureStore";
import {ThunkDispatch} from "redux-thunk";
import {AppActions} from "../types/actions";
import MyTable from './MyTable';
import {SharedBtn} from "./SharedBtn";
import { bindActionCreators } from "redux";
import {fetchUsers} from "../actions/user";
import ApplicationForm from "./ApplicationForm";
import StatusCode from "./StatusCode";
import Container from '@material-ui/core/Container';

interface DashboardPageProps {
  id?: string;
  color?: string;
}

interface DashboardPageState {}

type Props = DashboardPageProps & LinkStateProps & LinkDispatchProps;

export class Dashboard extends React.Component<Props, DashboardPageState> {

  render() {
    const configureBtn = {
      buttonText: "Submit",
      emitEvent: this.props.fetchUsers
    }

    const users: any[] = [];

    let userExist: boolean;

    userExist = (!users) ? false : true;

    return (
      <div data-test="dashboard">
        <Container fixed>
          <ApplicationForm/>
          <StatusCode/>
          {/*<SharedBtn {...configureBtn}/>*/}
          {/*{ userExist &&*/}
            {/*users.map((user, index) => {*/}
            {/*const { name, email } = user;*/}
            {/*return <div>{name}</div>*/}
          {/*})}*/}
          <MyTable/>
        </Container>
      </div>
    );
  }
}

interface LinkStateProps {

}
interface LinkDispatchProps {
  fetchUsers: () => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: DashboardPageProps
): LinkStateProps => ({
  users: state.users
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: DashboardPageProps
): LinkDispatchProps => ({
  fetchUsers: bindActionCreators(fetchUsers, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);