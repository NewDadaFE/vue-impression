import Button from './Button';
import Group from './Group';
import GroupTitle from './GroupTitle';
import Cell from './Cell';
import Icon from './Icon';
import pkg from '../../../package.json';

const install = Vue => {
    if (install.installed) return;

    Vue.component(Button.name, Button);
    Vue.component(Group.name, Group);
    Vue.component(GroupTitle.name, GroupTitle);
    Vue.component(Cell.name, Cell);
    Vue.component(Icon.name, Icon);
};

/* global window:true */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    version: pkg.version,
    Button,
    Group,
    GroupTitle,
    Cell,
    Icon,
};
