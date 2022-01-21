import React, { Suspense } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Loader from "../components/loader";
import NavBar from "../components/navbar";
import Tile from "../components/tile";
import { fetchNewsData } from "../services/api";
import { isMobile } from "../utils";

export const Feeds = () => {
  return (
    <View style={styles.container}>
      <NavBar leftText={"Welcome!"} title={"Your News Feeds"} />
      <Suspense fallback={<Loader />}>
        <NewsList />
      </Suspense>
    </View>
  );
};
function NewsList() {
  const newsItems = fetchNewsData.read();
  return isMobile ? (
    <ScrollView>
      {newsItems.map((news, index) => (
        <Tile
          key={news.title + index}
          title={news.title}
          description={news.description}
          image={news.image}
        />
      ))}
    </ScrollView>
  ) : (
    <View>
      {newsItems.map((news, index) => (
        <Tile
          key={news.title + index}
          title={news.title}
          description={news.description}
          image={news.image}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
