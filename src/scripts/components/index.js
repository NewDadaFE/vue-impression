import Button from './Button';
import Icon from './Icon';
import Group from './Group';
import GroupTitle from './GroupTitle';
import Cell from './Cell';
import Flex from './Flex';
import FlexItem from './FlexItem';
import Navbar from './Navbar';
import Tabbar from './Tabbar';
import TabbarItem from './TabbarItem';
import Mask from './Mask';
import Loading from './Loading';
import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';
import Radio from './Radio';
import RadioGroup from './RadioGroup';
import Toggle from './Toggle';
import InputNumber from './InputNumber';
import InputText from './InputText';
import InputTextarea from './InputTextarea';
import Selector from './Selector';
import SelectorOption from './SelectorOption';
import InlineSelector from './InlineSelector';
import InlineSelectorOption from './InlineSelectorOption';
import Navigation from './Navigation';
import NavigationItem from './NavigationItem';
import Tag from './Tag';
import Tip from './Tip';
import HRule from './HRule';
import BackToTop from './BackToTop';
import Badge from './Badge';
import Drawer from './Drawer';
import DrawerItem from './DrawerItem';
import SlideUp from './SlideUp';
import SlideUpHeader from './SlideUpHeader';
import SlideUpBody from './SlideUpBody';
import SegmentedControl from './SegmentedControl';
import SegmentedControlItem from './SegmentedControlItem';
import Sidelip from './Sidelip';
import Media from './Media';
import MediaObject from './MediaObject';
import MediaBody from './MediaBody';
import Card from './Card';
import CardBody from './CardBody';
import DatePicker from './DatePicker';
import Searchbar from './Searchbar';
import SearchbarBtn from './SearchbarBtn';
import SearchbarPlaceholder from './SearchbarPlaceholder';
import Picker from './Picker';
import PickerOption from './PickerOption';
import Loadmore from './Loadmore';
import Alert from './Alert';
import Swipe from './Swipe';
import SwipeItem from './SwipeItem';
// global utils
import toast from '../utils/toast';
import { alert, confirm } from '../utils/alert';
import loading from '../utils/loading';
// directives
import disfavor from '../directives/disfavor';
// config
import pkg from '../../../package.json';

const impression = {
    Button,
    Group,
    GroupTitle,
    Cell,
    Flex,
    FlexItem,
    Icon,
    Tag,
    Tip,
    HRule,
    Badge,
    Media,
    MediaObject,
    MediaBody,
    Card,
    CardBody,
    Swipe,
    SwipeItem,
    Navbar,
    Tabbar,
    TabbarItem,
    Navigation,
    NavigationItem,
    Drawer,
    DrawerItem,
    SegmentedControl,
    SegmentedControlItem,
    SlideUp,
    SlideUpHeader,
    SlideUpBody,
    Sidelip,
    Searchbar,
    SearchbarBtn,
    SearchbarPlaceholder,
    Picker,
    PickerOption,
    Loadmore,
    Mask,
    Alert,
    Loading,
    BackToTop,
    Checkbox,
    CheckboxGroup,
    Radio,
    RadioGroup,
    Toggle,
    InputNumber,
    InputText,
    InputTextarea,
    Selector,
    SelectorOption,
    InlineSelector,
    InlineSelectorOption,
    DatePicker,
};

const install = Vue => {
    if(install.installed) return;

    // components
    Object.keys(impression).forEach(key => {
        Vue.component(impression[key].name, impression[key]);
    });

    Vue.$toast = Vue.prototype.$toast = toast;
    Vue.$alert = Vue.prototype.$alert = alert;
    Vue.$confirm = Vue.prototype.$confirm = confirm;
    Vue.$loading = Vue.prototype.$loading = loading;

    // directives
    Vue.directive('disfavor', disfavor);
};

/* global window:true */
if(typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    version: pkg.version,
    install,
    ...impression,
};
