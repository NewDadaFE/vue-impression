import Button from './Button';
import Group from './Group';
import GroupTitle from './GroupTitle';
import Cell from './Cell';
import Icon from './Icon';
import Navbar from './Navbar';
import Tabbar from './Tabbar';
import TabbarItem from './TabbarItem';
import Toast from './Toast';
import pkg from '../../../package.json';

const install = Vue => {
    if (install.installed) return;

    Vue.component(Button.name, Button);
    Vue.component(Group.name, Group);
    Vue.component(GroupTitle.name, GroupTitle);
    Vue.component(Cell.name, Cell);
    Vue.component(Icon.name, Icon);

    Vue.component(Navbar.name, Navbar);
    Vue.component(Tabbar.name, Tabbar);
    Vue.component(TabbarItem.name, TabbarItem);
    Vue.component(Toast.name, Toast);
};

/* global window:true */
if (typeof window !== 'undefined' && window.Vue) {
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
