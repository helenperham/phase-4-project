
import React, {useEffect, useState} from "react";
import { ActivityIndicator, FlatList, View, Text, StyleSheet } from "react-native";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const Places = () => {
const [search, setSearch] = useState('');
const handleChange = address => { setSearch(address) };

<PlacesAutocomplete
    value={search}
    onChange={handleChange}
    onSelect={handleSelect}
>
    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
            <input {...getInputProps({ placeholder: 'Search Places ...' })} />
            <div>
                {loading ? <div>Loading...</div> : null}
                {suggestions.map(suggestion => {
                    const style = {
                        backgroundColor: suggestion.active ? '#41b6e6' : '#fff',
                    };
                    return (
                        <div {...getSuggestionItemProps(suggestion, { style })}>
                            {suggestion.description}
                        </div>
                    );
                })}
            </div>
        </div>
    )}
</PlacesAutocomplete>

const handleSelect = async address => {
    setSearch(address);
    const results = await geocodeByAddress(address);
    const latLng = await getLatLng(results[0]);
    console.log(latLng);
    // Use latLng object to get the place ID from the Google Places API
};

};

export default Places;



// 
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   const getMovies = async () => {
//     try {
//       const response = await fetch('https://reactnative.dev/movies.json');
//       const json = await response.json();
//       setData(json.movies);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getMovies();
//   }, []);

//   return (
//     <View style={{flex: 1, padding: 24}}>
//       {isLoading ? (
//         <ActivityIndicator />
//       ) : (
//         <FlatList
//           data={data}
//           keyExtractor={({id}) => id}
//           renderItem={({item}) => (
//             <Text>
//               {item.title}, {item.releaseYear}
//             </Text>
//           )}
//         />
//       )}
//     </View>
//   );
