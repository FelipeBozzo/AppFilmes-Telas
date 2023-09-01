import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/header';
import Search from '../../components/searchBar';
import BannerMovies from '../../components/bannerMovies';
import Filmes from '../../data/filmes'
import Series from '../../data/series.js'
import CardSeries from '../../components/cardSeries';
import CardFilmes from '../../components/cardFilmes';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Search></Search>
      <BannerMovies></BannerMovies>

<View style={{width:'90%'}}>  
      <FlatList 
      showsHorizontalScrollIndicator = {false}
      horizontal = {true}
      data ={Filmes}
      keyExtractor = {(item) => item.id}
      renderItem = { ({item}) =>(

        <CardFilmes
          titulo = {item.nome}
          imagem = {item.imagem}
          nota = {item.notas}
        ></CardFilmes>

      )}
      />
      </View>


      <View style={{width:'90%'}}>  
      <FlatList 
      showsHorizontalScrollIndicator = {false}
      horizontal = {true}
      data ={Series}
      keyExtractor = {(item) => item.id}
      renderItem = { ({item}) =>(

        <CardSeries
          titulo = {item.nome}
          imagem = {item.imagem}
          nota = {item.notas}
        ></CardSeries>

      )}
      />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141A29',
    alignItems: 'center',
  },
});
