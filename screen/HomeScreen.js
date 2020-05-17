import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ListItem from '../componets/ListItem';
import Loading from '../componets/Loding';
import Constants from 'expo-constants';
import axios from 'axios';

const URL = `http://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default HomeScreen = ({navigation}) => {
    
    const [articles, setArticle] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        setLoading(true);
        try {
            const response = await axios.get(URL);
            setArticle(response.data.articles);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={articles}
                renderIten={({ item }) =>
                    <ListItem
                        imageURL={item.urlToImage}
                        title={item.title}
                        author={item.author}
                        onPress={()  => navigation.navigate("Article", {article: item})}
                    />}
                keyExtractor={(item, index) => index.toString()}
            />
            {loading && <Loading />}
        </SafeAreaView>
    );
}

