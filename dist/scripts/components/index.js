import _extends from 'babel-runtime/helpers/extends';
import _Object$keys from 'babel-runtime/core-js/object/keys';
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
import Progressbar from './Progressbar';
import Progressbars from './Progressbars';
import Stepbar from './Stepbar';
import StepbarItem from './StepbarItem';
import Timeline from './Timeline';
import TimelineItem from './TimelineItem';
import Sticky from './Sticky';

import toast from '../utils/toast';
import { alert } from '../utils/alert';
import loading from '../utils/loading';

import disfavor from '../directives/disfavor';

var impression = {
    Button: Button,
    Group: Group,
    GroupTitle: GroupTitle,
    Cell: Cell,
    Flex: Flex,
    FlexItem: FlexItem,
    Icon: Icon,
    Tag: Tag,
    Tip: Tip,
    HRule: HRule,
    Badge: Badge,
    Media: Media,
    MediaObject: MediaObject,
    MediaBody: MediaBody,
    Card: Card,
    CardBody: CardBody,
    Swipe: Swipe,
    SwipeItem: SwipeItem,
    Navbar: Navbar,
    Tabbar: Tabbar,
    TabbarItem: TabbarItem,
    Navigation: Navigation,
    NavigationItem: NavigationItem,
    Drawer: Drawer,
    DrawerItem: DrawerItem,
    SegmentedControl: SegmentedControl,
    SegmentedControlItem: SegmentedControlItem,
    SlideUp: SlideUp,
    SlideUpHeader: SlideUpHeader,
    SlideUpBody: SlideUpBody,
    Sidelip: Sidelip,
    Searchbar: Searchbar,
    SearchbarBtn: SearchbarBtn,
    SearchbarPlaceholder: SearchbarPlaceholder,
    Picker: Picker,
    PickerOption: PickerOption,
    Loadmore: Loadmore,
    Mask: Mask,
    Alert: Alert,
    Loading: Loading,
    BackToTop: BackToTop,
    Checkbox: Checkbox,
    CheckboxGroup: CheckboxGroup,
    Radio: Radio,
    RadioGroup: RadioGroup,
    Toggle: Toggle,
    InputNumber: InputNumber,
    InputText: InputText,
    InputTextarea: InputTextarea,
    Selector: Selector,
    SelectorOption: SelectorOption,
    InlineSelector: InlineSelector,
    InlineSelectorOption: InlineSelectorOption,
    DatePicker: DatePicker,
    Progressbar: Progressbar,
    Progressbars: Progressbars,
    Stepbar: Stepbar,
    StepbarItem: StepbarItem,
    Timeline: Timeline,
    TimelineItem: TimelineItem,
    Sticky: Sticky
};

var install = function install(Vue) {
    if (install.installed) return;

    _Object$keys(impression).forEach(function (key) {
        Vue.component(impression[key].name, impression[key]);
    });

    Vue.$toast = Vue.prototype.$toast = toast;
    Vue.$alert = Vue.prototype.$alert = alert;
    Vue.$loading = Vue.prototype.$loading = loading;

    Vue.directive('disfavor', disfavor);
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export { Button, Group, GroupTitle, Cell, Flex, FlexItem, Icon, Tag, Tip, HRule, Badge, Media, MediaObject, MediaBody, Card, CardBody, Swipe, SwipeItem, Navbar, Tabbar, TabbarItem, Navigation, NavigationItem, Drawer, DrawerItem, SegmentedControl, SegmentedControlItem, SlideUp, SlideUpHeader, SlideUpBody, Sidelip, Searchbar, SearchbarBtn, SearchbarPlaceholder, Picker, PickerOption, Loadmore, Mask, Alert, Loading, BackToTop, Checkbox, CheckboxGroup, Radio, RadioGroup, Toggle, InputNumber, InputText, InputTextarea, Selector, SelectorOption, InlineSelector, InlineSelectorOption, DatePicker, Progressbar, Stepbar, StepbarItem, Timeline, TimelineItem, Sticky };

export default _extends({
    install: install
}, impression);