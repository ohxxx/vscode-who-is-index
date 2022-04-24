import { ExtensionContext, workspace, window } from 'vscode'

export function activate(context: ExtensionContext) {
  /**
   * 实现思路：
   *    1、获取当前编辑区域的所有文件的 path
   *    2、提取符合条件的文件 path
   *    3、获取符合条件的上级目录文件名
   *    4、动态设置 tab label name
   */

  /**
   * 调研的时候碰到了一个问题：没找到可以动态修改 label name 的方法
   */
}

export function deactivate() { }
