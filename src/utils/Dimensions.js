import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const Width = (num) => width * (num / 100);
const Height = (num) => height * (num / 100);

export { Width, Height };
