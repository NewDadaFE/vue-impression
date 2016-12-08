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
import Radio from './Radio';
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
import toast from '../utils/toast';
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

    Vue.component(Navbar.name, Navbar);
    Vue.component(Tabbar.name, Tabbar);
    Vue.component(TabbarItem.name, TabbarItem);
    Vue.component(Navigation.name, Navigation);
    Vue.component(NavigationItem.name, NavigationItem);

    Vue.component(Loading.name, Loading);
    Vue.component(BackToTop.name, BackToTop);

    Vue.component(Checkbox.name, Checkbox);
    Vue.component(Radio.name, Radio);
    Vue.component(Toggle.name, Toggle);
    Vue.component(InputNumber.name, InputNumber);
    Vue.component(InputText.name, InputText);
    Vue.component(InputTextarea.name, InputTextarea);
    Vue.component(Selector.name, Selector);
    Vue.component(SelectorOption.name, SelectorOption);
    Vue.component(InlineSelector.name, InlineSelector);
    Vue.component(InlineSelectorOption.name, InlineSelectorOption);

    Vue.$toast = Vue.prototype.$toast = toast;
};

/* global window:true */
if(typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    version: pkg.version,
    install,
    Button,
    Group,
    GroupTitle,
    Cell,
    Icon,
};
