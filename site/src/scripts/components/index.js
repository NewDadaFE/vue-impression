import Button from './Button';
import Group from './Group';
import GroupTitle from './GroupTitle';
import Cell from './Cell';
import Icon from './Icon';
import Navbar from './Navbar';
import Tabbar from './Tabbar';
import TabbarItem from './TabbarItem';
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
import toast from '../utils/toast';
import loading from '../utils/loading';
import pkg from '../../../package.json';

const install = Vue => {
    if(install.installed) return;

    Vue.component(Button.name, Button);
    Vue.component(Group.name, Group);
    Vue.component(GroupTitle.name, GroupTitle);
    Vue.component(Cell.name, Cell);
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
    Vue.component(Sidelip.name, Sidelip);
    Vue.component(Searchbar.name, Searchbar);

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
