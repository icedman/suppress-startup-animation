/* extension.js
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
 */

/* exported init */

import * as Main from 'resource:///org/gnome/shell/ui/main.js';

export default class Extension {

  enable() {
    if (!this._restore) {
      this._restore = Main.overview.runStartupAnimation;
    }
    Main.overview.runStartupAnimation = (callback) => callback();
  }

  disable() {
    Main.overview.runStartupAnimation = this._restore;
  }
}
