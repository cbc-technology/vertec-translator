/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { commands, ExtensionContext } from 'vscode';
import { pickClassName, pickMemberName, pickText } from './translator';

export function activate(_context: ExtensionContext) {
	commands.registerCommand('vertec.translateClass', () => pickClassName());
	commands.registerCommand('vertec.translateMember', () => pickMemberName());
	commands.registerCommand('vertec.translateText', () => pickText());

}
