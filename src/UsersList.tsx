import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';

import {User} from './store/users/types';
import {ApplicationState} from './store';

import * as UsersActions from './store/users/actions';

interface StateProps {
  users: User[];
  loading: boolean;
}

interface DispatchProps {
  loadRequest(page: number): void;
}

type Props = StateProps & DispatchProps;

const UsersList = (props: Props) => {
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const {loadRequest} = props;

    loadRequest(page);
  }, [page]);

  const {users, loading} = props;

  const loadMoreUsers = async () => {
    if (loading) {
      return;
    }
    setPage(page + 1);
    // useEffect will do the call
  };

  const renderFooter = () => {
    if (!loading) {
      return null;
    }

    return (
      <View style={styles.loading}>
        <ActivityIndicator color="#7531c1" />
      </View>
    );
  };

  const renderItem = ({item}: {item: User}) => (
    <View style={styles.listItem}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: item.picture.thumbnail,
        }}
      />
      <Text>
        {item.name.last}, {item.name.first}
      </Text>
    </View>
  );

  return (
    <FlatList
      style={{marginTop: 30}}
      contentContainerStyle={styles.list}
      data={users}
      renderItem={renderItem}
      keyExtractor={item => item?.login?.uuid}
      onEndReached={loadMoreUsers}
      onEndReachedThreshold={0.1}
      ListFooterComponent={renderFooter}
      ItemSeparatorComponent={() => <View style={{height: 20}} />}
    />
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  users: state.users.data,
  loading: state.users.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(UsersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
  },

  listItem: {
    backgroundColor: '#EEE',
    padding: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  loading: {
    alignSelf: 'center',
    marginVertical: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 20,
  },
});
