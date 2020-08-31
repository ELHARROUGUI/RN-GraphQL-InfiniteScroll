import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { COUNTRY } from "./../../graphql/query/country";
import style from "./style";

const DEFAULT_SIZE = 20;

const Country = () => {
  const { loading, error, data, fetchMore } = useQuery(COUNTRY, {
    variables: {
      first: DEFAULT_SIZE,
      offset: 0,
    },
  });

  let items = [];
  if (error) {
    return <Text>Error!</Text>;
  }
  if (!loading && !error) {
    items = data.Country;
  }
  const loadMore = () =>
    fetchMore({
      variables: {
        first: DEFAULT_SIZE,
        offset: data.Country.length,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        return Object.assign({}, prev, {
          Country: [...prev.Country, ...fetchMoreResult.Country],
        });
      },
    });

  return (
    <View style={style.container}>
      <Text style={style.title}>Countries</Text>
      <ScrollView onScrollEndDrag={loadMore}>
        {items.map(({ _id, name, flag: { emoji } }) => (
          <Text key={`key-${_id}`} style={style.item}>
            {emoji} - {name}
          </Text>
        ))}
      </ScrollView>
      {loading && <Text>loading...</Text>}
    </View>
  );
};

export default Country;
