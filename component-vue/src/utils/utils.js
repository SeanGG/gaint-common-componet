// 格式化含有area字段，内容为{ areaName: XXXX, children: []}
const formatMenuArea = (data, list) => {
  let result = [];

  let childrenList = [];
  // console.log(data)
  // console.log(list)
  checkArray(data) && data.map(item => {
    const matchItem = list.filter(listItem => {
      return listItem.name === item
    })[0]
    result.push(matchItem);
  })
  // console.log(result)

  return result;
}

// 格式化不含有area字段，内容为 children: []
const formatMenuArray = (data) => {
  let result = {};

  const {
    name = 'unknow', title = '未知', path = '/', hideInMenu = false, children = [], area = [],
  } = data;

  result = {
    title,
    path,
    children: children,
  }

  return result;
}

export const formatMenu1 = (menu = []) => {
  let newMenu = [];
  menu.map(item => {
    const {
      name = 'unknow', title = '未知', path = '/', hideInMenu = false, children = [], area = [], areaTitle = '',
    } = item;
    if (!hideInMenu && path !== '') {

      if (children && checkArray(children)) {
        newMenu = formatMenu(children);
      }

      let result = {};
      if (area && checkArray(area)) {
        result = formatMenuArea(item, menu);
      } else {
        result = formatMenuArray(item);
      }
      console.log(JSON.stringify(result))
      newMenu.push(result)
    }
  })
  // console.log(JSON.stringify(newMenu))
  return newMenu;
}

export const formatMenu = (menu = []) => {
  let newMenu = [];

  menu.map(item => {
    const {
      name = 'unknow', title = '未知', path = '/', hideInMenu = false, children = [], area = [],
    } = item;
    if (!hideInMenu && path !== '') {

      let childrenlist = []
      if (children && checkArray(children)) {
        childrenlist = formatMenu(children);
      }

      let areaTitle = null;
      if(checkArray(area)){

        menu.map(menuItem => {
          area.map(areaItem => {
            if(areaItem === menuItem.name){
              menuItem.hideInMenu = true;
            }
          })
        })

        childrenlist = formatMenuArea(area, menu);
      }

      let result = {
        // ...item,
        name,
        title,
        path,
      }
      if(checkArray(childrenlist)){
        result.children = childrenlist; 
      }

      newMenu.push(result)
    }
  })
  // console.log(JSON.stringify(newMenu))
  return newMenu;
}

// 判断数组
export const checkArray = data => {
  // null判断
  if (!data) {
    return false;
  }

  // 数组格式判断
  if (data.constructor !== Array) {
    return false;
  }

  // 判断数组长度
  if (data.length <= 0) {
    return false;
  }

  return true;
};