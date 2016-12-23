import Button from './components/Button';
import Icon from './components/Icon';
import Group from './components/Group';
import GroupTitle from './components/GroupTitle';
import Cell from './components/Cell';
import Flex from './components/Flex';
import FlexItem from './components/FlexItem';
import Navbar from './components/Navbar';
import Tabbar from './components/Tabbar';
import TabbarItem from './components/TabbarItem';
import Mask from './components/Mask';
import Loading from './components/Loading';
import Checkbox from './components/Checkbox';
import CheckboxGroup from './components/CheckboxGroup';
import Radio from './components/Radio';
import RadioGroup from './components/RadioGroup';
import Toggle from './components/Toggle';
import InputNumber from './components/InputNumber';
import InputText from './components/InputText';
import InputTextarea from './components/InputTextarea';
import Selector from './components/Selector';
import SelectorOption from './components/SelectorOption';
import InlineSelector from './components/InlineSelector';
import InlineSelectorOption from './components/InlineSelectorOption';
import Navigation from './components/Navigation';
import NavigationItem from './components/NavigationItem';
import Tag from './components/Tag';
import Tip from './components/Tip';
import HRule from './components/HRule';
import BackToTop from './components/BackToTop';
import Badge from './components/Badge';
import Drawer from './components/Drawer';
import DrawerItem from './components/DrawerItem';
import SlideUp from './components/SlideUp';
import SlideUpHeader from './components/SlideUpHeader';
import SlideUpBody from './components/SlideUpBody';
import SegmentedControl from './components/SegmentedControl';
import SegmentedControlItem from './components/SegmentedControlItem';
import Sidelip from './components/Sidelip';
import Media from './components/Media';
import MediaObject from './components/MediaObject';
import MediaBody from './components/MediaBody';
import Card from './components/Card';
import CardBody from './components/CardBody';
import DatePicker from './components/DatePicker';
import Searchbar from './components/Searchbar';
import SearchbarBtn from './components/SearchbarBtn';
import SearchbarPlaceholder from './components/SearchbarPlaceholder';
import Picker from './components/Picker';
import PickerOption from './components/PickerOption';
import Loadmore from './components/Loadmore';
import Alert from './components/Alert';
import Swipe from './components/Swipe';
import SwipeItem from './components/SwipeItem';
import toast from './utils/toast';
import { alert, confirm } from './utils/alert';
import loading from './utils/loading';
import pkg from '../../package.json';

const install = Vue => {
    if(install.installed) return;

    Vue.component(Button.name, Button);
    Vue.component(Group.name, Group);
    Vue.component(GroupTitle.name, GroupTitle);
    Vue.component(Cell.name, Cell);
    Vue.component(Flex.name, Flex);
    Vue.component(FlexItem.name, FlexItem);
    Vue.component(Icon.name, Icon);
    Vue.component(Tag.name, Tag);
    Vue.component(Tip.name, Tip);
    Vue.component(HRule.name, HRule);
    Vue.component(Badge.name, Badge);
    Vue.component(Media.name, Media);
    Vue.component(MediaObject.name, MediaObject);
    Vue.component(MediaBody.name, MediaBody);
    Vue.component(Card.name, Card);
    Vue.component(CardBody.name, CardBody);
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);

    Vue.component(Navbar.name, Navbar);
    Vue.component(Tabbar.name, Tabbar);
    Vue.component(TabbarItem.name, TabbarItem);
    Vue.component(Navigation.name, Navigation);
    Vue.component(NavigationItem.name, NavigationItem);
    Vue.component(Drawer.name, Drawer);
    Vue.component(DrawerItem.name, DrawerItem);
    Vue.component(SegmentedControl.name, SegmentedControl);
    Vue.component(SegmentedControlItem.name, SegmentedControlItem);
    Vue.component(SlideUp.name, SlideUp);
    Vue.component(SlideUpHeader.name, SlideUpHeader);
    Vue.component(SlideUpBody.name, SlideUpBody);
    Vue.component(Sidelip.name, Sidelip);
    Vue.component(Searchbar.name, Searchbar);
    Vue.component(SearchbarBtn.name, SearchbarBtn);
    Vue.component(SearchbarPlaceholder.name, SearchbarPlaceholder);
    Vue.component(Picker.name, Picker);
    Vue.component(PickerOption.name, PickerOption);
    Vue.component(Loadmore.name, Loadmore);

    Vue.component(Mask.name, Mask);
    Vue.component(Alert.name, Alert);
    Vue.component(Loading.name, Loading);
    Vue.component(BackToTop.name, BackToTop);

    Vue.component(Checkbox.name, Checkbox);
    Vue.component(CheckboxGroup.name, CheckboxGroup);
    Vue.component(Radio.name, Radio);
    Vue.component(RadioGroup.name, RadioGroup);
    Vue.component(Toggle.name, Toggle);
    Vue.component(InputNumber.name, InputNumber);
    Vue.component(InputText.name, InputText);
    Vue.component(InputTextarea.name, InputTextarea);
    Vue.component(Selector.name, Selector);
    Vue.component(SelectorOption.name, SelectorOption);
    Vue.component(InlineSelector.name, InlineSelector);
    Vue.component(InlineSelectorOption.name, InlineSelectorOption);
    Vue.component(DatePicker.name, DatePicker);

    Vue.$toast = Vue.prototype.$toast = toast;
    Vue.$alert = Vue.prototype.$alert = alert;
    Vue.$confirm = Vue.prototype.$confirm = confirm;
    Vue.$loading = Vue.prototype.$loading = loading;
};

/* global window:true */
if(typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    version: pkg.version,
    install,
};
