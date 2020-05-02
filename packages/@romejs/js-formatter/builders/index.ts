/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {BuilderMethod} from '../Builder';

// rome-ignore-next-line lint/noExplicitAny
const builders: Map<string, BuilderMethod<any>> = new Map();

export default builders;

// EVERYTHING BELOW IS AUTOGENERATED. SEE SCRIPTS FOLDER FOR UPDATE SCRIPTS

import AmbiguousFlowTypeCastExpression from './temp/AmbiguousFlowTypeCastExpression';
builders.set('AmbiguousFlowTypeCastExpression', AmbiguousFlowTypeCastExpression);

import AnyKeywordTypeAnnotation from './types/AnyKeywordTypeAnnotation';
builders.set('AnyKeywordTypeAnnotation', AnyKeywordTypeAnnotation);

import ArrayExpression from './expressions/ArrayExpression';
builders.set('ArrayExpression', ArrayExpression);

import ArrayHole from './auxiliary/ArrayHole';
builders.set('ArrayHole', ArrayHole);

import ArrowFunctionExpression from './expressions/ArrowFunctionExpression';
builders.set('ArrowFunctionExpression', ArrowFunctionExpression);

import AssignmentArrayPattern from './patterns/AssignmentArrayPattern';
builders.set('AssignmentArrayPattern', AssignmentArrayPattern);

import AssignmentAssignmentPattern from './patterns/AssignmentAssignmentPattern';
builders.set('AssignmentAssignmentPattern', AssignmentAssignmentPattern);

import AssignmentExpression from './expressions/AssignmentExpression';
builders.set('AssignmentExpression', AssignmentExpression);

import AssignmentIdentifier from './patterns/AssignmentIdentifier';
builders.set('AssignmentIdentifier', AssignmentIdentifier);

import AssignmentObjectPattern from './patterns/AssignmentObjectPattern';
builders.set('AssignmentObjectPattern', AssignmentObjectPattern);

import AssignmentObjectPatternProperty from './patterns/AssignmentObjectPatternProperty';
builders.set('AssignmentObjectPatternProperty', AssignmentObjectPatternProperty);

import AwaitExpression from './expressions/AwaitExpression';
builders.set('AwaitExpression', AwaitExpression);

import BigIntKeywordTypeAnnotation from './types/BigIntKeywordTypeAnnotation';
builders.set('BigIntKeywordTypeAnnotation', BigIntKeywordTypeAnnotation);

import BigIntLiteral from './literals/BigIntLiteral';
builders.set('BigIntLiteral', BigIntLiteral);

import BinaryExpression from './expressions/BinaryExpression';
builders.set('BinaryExpression', BinaryExpression);

import BindingArrayPattern from './patterns/BindingArrayPattern';
builders.set('BindingArrayPattern', BindingArrayPattern);

import BindingAssignmentPattern from './patterns/BindingAssignmentPattern';
builders.set('BindingAssignmentPattern', BindingAssignmentPattern);

import BindingIdentifier from './patterns/BindingIdentifier';
builders.set('BindingIdentifier', BindingIdentifier);

import BindingObjectPattern from './patterns/BindingObjectPattern';
builders.set('BindingObjectPattern', BindingObjectPattern);

import BindingObjectPatternProperty from './patterns/BindingObjectPatternProperty';
builders.set('BindingObjectPatternProperty', BindingObjectPatternProperty);

import BlockStatement from './statements/BlockStatement';
builders.set('BlockStatement', BlockStatement);

import BooleanKeywordTypeAnnotation from './types/BooleanKeywordTypeAnnotation';
builders.set('BooleanKeywordTypeAnnotation', BooleanKeywordTypeAnnotation);

import BooleanLiteral from './literals/BooleanLiteral';
builders.set('BooleanLiteral', BooleanLiteral);

import BooleanLiteralTypeAnnotation from './types/BooleanLiteralTypeAnnotation';
builders.set('BooleanLiteralTypeAnnotation', BooleanLiteralTypeAnnotation);

import BreakStatement from './statements/BreakStatement';
builders.set('BreakStatement', BreakStatement);

import CallExpression from './expressions/CallExpression';
builders.set('CallExpression', CallExpression);

import CatchClause from './auxiliary/CatchClause';
builders.set('CatchClause', CatchClause);

import ClassDeclaration from './classes/ClassDeclaration';
builders.set('ClassDeclaration', ClassDeclaration);

import ClassExpression from './classes/ClassExpression';
builders.set('ClassExpression', ClassExpression);

import ClassHead from './classes/ClassHead';
builders.set('ClassHead', ClassHead);

import ClassMethod from './classes/ClassMethod';
builders.set('ClassMethod', ClassMethod);

import ClassPrivateMethod from './classes/ClassPrivateMethod';
builders.set('ClassPrivateMethod', ClassPrivateMethod);

import ClassPrivateProperty from './classes/ClassPrivateProperty';
builders.set('ClassPrivateProperty', ClassPrivateProperty);

import ClassProperty from './classes/ClassProperty';
builders.set('ClassProperty', ClassProperty);

import ClassPropertyMeta from './classes/ClassPropertyMeta';
builders.set('ClassPropertyMeta', ClassPropertyMeta);

import CommentBlock from './core/CommentBlock';
builders.set('CommentBlock', CommentBlock);

import CommentLine from './core/CommentLine';
builders.set('CommentLine', CommentLine);

import ComputedMemberProperty from './auxiliary/ComputedMemberProperty';
builders.set('ComputedMemberProperty', ComputedMemberProperty);

import ComputedPropertyKey from './objects/ComputedPropertyKey';
builders.set('ComputedPropertyKey', ComputedPropertyKey);

import ConditionalExpression from './expressions/ConditionalExpression';
builders.set('ConditionalExpression', ConditionalExpression);

import ContinueStatement from './statements/ContinueStatement';
builders.set('ContinueStatement', ContinueStatement);

import DebuggerStatement from './statements/DebuggerStatement';
builders.set('DebuggerStatement', DebuggerStatement);

import Directive from './core/Directive';
builders.set('Directive', Directive);

import DoExpression from './expressions/DoExpression';
builders.set('DoExpression', DoExpression);

import DoWhileStatement from './statements/DoWhileStatement';
builders.set('DoWhileStatement', DoWhileStatement);

import EmptyKeywordTypeAnnotation from './types/EmptyKeywordTypeAnnotation';
builders.set('EmptyKeywordTypeAnnotation', EmptyKeywordTypeAnnotation);

import EmptyStatement from './statements/EmptyStatement';
builders.set('EmptyStatement', EmptyStatement);

import ExportAllDeclaration from './modules/ExportAllDeclaration';
builders.set('ExportAllDeclaration', ExportAllDeclaration);

import ExportDefaultDeclaration from './modules/ExportDefaultDeclaration';
builders.set('ExportDefaultDeclaration', ExportDefaultDeclaration);

import ExportDefaultSpecifier from './modules/ExportDefaultSpecifier';
builders.set('ExportDefaultSpecifier', ExportDefaultSpecifier);

import ExportExternalDeclaration from './modules/ExportExternalDeclaration';
builders.set('ExportExternalDeclaration', ExportExternalDeclaration);

import ExportExternalSpecifier from './modules/ExportExternalSpecifier';
builders.set('ExportExternalSpecifier', ExportExternalSpecifier);

import ExportLocalDeclaration from './modules/ExportLocalDeclaration';
builders.set('ExportLocalDeclaration', ExportLocalDeclaration);

import ExportLocalSpecifier from './modules/ExportLocalSpecifier';
builders.set('ExportLocalSpecifier', ExportLocalSpecifier);

import ExportNamespaceSpecifier from './modules/ExportNamespaceSpecifier';
builders.set('ExportNamespaceSpecifier', ExportNamespaceSpecifier);

import ExpressionStatement from './statements/ExpressionStatement';
builders.set('ExpressionStatement', ExpressionStatement);

import FlowArrayTypeAnnotation from './flow/FlowArrayTypeAnnotation';
builders.set('FlowArrayTypeAnnotation', FlowArrayTypeAnnotation);

import FlowClassImplements from './flow/FlowClassImplements';
builders.set('FlowClassImplements', FlowClassImplements);

import FlowDeclareClass from './flow/FlowDeclareClass';
builders.set('FlowDeclareClass', FlowDeclareClass);

import FlowDeclaredPredicate from './flow/FlowDeclaredPredicate';
builders.set('FlowDeclaredPredicate', FlowDeclaredPredicate);

import FlowDeclareExportAll from './flow/FlowDeclareExportAll';
builders.set('FlowDeclareExportAll', FlowDeclareExportAll);

import FlowDeclareExportDefault from './flow/FlowDeclareExportDefault';
builders.set('FlowDeclareExportDefault', FlowDeclareExportDefault);

import FlowDeclareExportNamed from './flow/FlowDeclareExportNamed';
builders.set('FlowDeclareExportNamed', FlowDeclareExportNamed);

import FlowDeclareFunction from './flow/FlowDeclareFunction';
builders.set('FlowDeclareFunction', FlowDeclareFunction);

import FlowDeclareInterface from './flow/FlowDeclareInterface';
builders.set('FlowDeclareInterface', FlowDeclareInterface);

import FlowDeclareModule from './flow/FlowDeclareModule';
builders.set('FlowDeclareModule', FlowDeclareModule);

import FlowDeclareModuleExports from './flow/FlowDeclareModuleExports';
builders.set('FlowDeclareModuleExports', FlowDeclareModuleExports);

import FlowDeclareOpaqueType from './flow/FlowDeclareOpaqueType';
builders.set('FlowDeclareOpaqueType', FlowDeclareOpaqueType);

import FlowDeclareVariable from './flow/FlowDeclareVariable';
builders.set('FlowDeclareVariable', FlowDeclareVariable);

import FlowExistsTypeAnnotation from './flow/FlowExistsTypeAnnotation';
builders.set('FlowExistsTypeAnnotation', FlowExistsTypeAnnotation);

import FlowFunctionTypeAnnotation from './flow/FlowFunctionTypeAnnotation';
builders.set('FlowFunctionTypeAnnotation', FlowFunctionTypeAnnotation);

import FlowFunctionTypeParam from './flow/FlowFunctionTypeParam';
builders.set('FlowFunctionTypeParam', FlowFunctionTypeParam);

import FlowGenericTypeAnnotation from './flow/FlowGenericTypeAnnotation';
builders.set('FlowGenericTypeAnnotation', FlowGenericTypeAnnotation);

import FlowInferredPredicate from './flow/FlowInferredPredicate';
builders.set('FlowInferredPredicate', FlowInferredPredicate);

import FlowInterface from './flow/FlowInterface';
builders.set('FlowInterface', FlowInterface);

import FlowInterfaceDeclaration from './flow/FlowInterfaceDeclaration';
builders.set('FlowInterfaceDeclaration', FlowInterfaceDeclaration);

import FlowInterfaceExtends from './flow/FlowInterfaceExtends';
builders.set('FlowInterfaceExtends', FlowInterfaceExtends);

import FlowInterfaceTypeAnnotation from './flow/FlowInterfaceTypeAnnotation';
builders.set('FlowInterfaceTypeAnnotation', FlowInterfaceTypeAnnotation);

import FlowNullableTypeAnnotation from './flow/FlowNullableTypeAnnotation';
builders.set('FlowNullableTypeAnnotation', FlowNullableTypeAnnotation);

import FlowNumericLiteral from './flow/FlowNumericLiteral';
builders.set('FlowNumericLiteral', FlowNumericLiteral);

import FlowObjectTypeAnnotation from './flow/FlowObjectTypeAnnotation';
builders.set('FlowObjectTypeAnnotation', FlowObjectTypeAnnotation);

import FlowObjectTypeCallProperty from './flow/FlowObjectTypeCallProperty';
builders.set('FlowObjectTypeCallProperty', FlowObjectTypeCallProperty);

import FlowObjectTypeIndexer from './flow/FlowObjectTypeIndexer';
builders.set('FlowObjectTypeIndexer', FlowObjectTypeIndexer);

import FlowObjectTypeInternalSlot from './flow/FlowObjectTypeInternalSlot';
builders.set('FlowObjectTypeInternalSlot', FlowObjectTypeInternalSlot);

import FlowObjectTypeProperty from './flow/FlowObjectTypeProperty';
builders.set('FlowObjectTypeProperty', FlowObjectTypeProperty);

import FlowObjectTypeSpreadProperty from './flow/FlowObjectTypeSpreadProperty';
builders.set('FlowObjectTypeSpreadProperty', FlowObjectTypeSpreadProperty);

import FlowOpaqueType from './flow/FlowOpaqueType';
builders.set('FlowOpaqueType', FlowOpaqueType);

import FlowQualifiedTypeIdentifier from './flow/FlowQualifiedTypeIdentifier';
builders.set('FlowQualifiedTypeIdentifier', FlowQualifiedTypeIdentifier);

import FlowThisTypeAnnotation from './flow/FlowThisTypeAnnotation';
builders.set('FlowThisTypeAnnotation', FlowThisTypeAnnotation);

import FlowTupleTypeAnnotation from './flow/FlowTupleTypeAnnotation';
builders.set('FlowTupleTypeAnnotation', FlowTupleTypeAnnotation);

import FlowTypeCastExpression from './flow/FlowTypeCastExpression';
builders.set('FlowTypeCastExpression', FlowTypeCastExpression);

import FlowTypeofTypeAnnotation from './flow/FlowTypeofTypeAnnotation';
builders.set('FlowTypeofTypeAnnotation', FlowTypeofTypeAnnotation);

import FlowTypeParameter from './flow/FlowTypeParameter';
builders.set('FlowTypeParameter', FlowTypeParameter);

import FlowTypeParameterDeclaration from './flow/FlowTypeParameterDeclaration';
builders.set('FlowTypeParameterDeclaration', FlowTypeParameterDeclaration);

import FlowTypeParameterInstantiation from './flow/FlowTypeParameterInstantiation';
builders.set('FlowTypeParameterInstantiation', FlowTypeParameterInstantiation);

import FlowVariance from './flow/FlowVariance';
builders.set('FlowVariance', FlowVariance);

import ForInStatement from './statements/ForInStatement';
builders.set('ForInStatement', ForInStatement);

import ForOfStatement from './statements/ForOfStatement';
builders.set('ForOfStatement', ForOfStatement);

import ForStatement from './statements/ForStatement';
builders.set('ForStatement', ForStatement);

import FunctionDeclaration from './statements/FunctionDeclaration';
builders.set('FunctionDeclaration', FunctionDeclaration);

import FunctionExpression from './expressions/FunctionExpression';
builders.set('FunctionExpression', FunctionExpression);

import FunctionHead from './auxiliary/FunctionHead';
builders.set('FunctionHead', FunctionHead);

import Identifier from './auxiliary/Identifier';
builders.set('Identifier', Identifier);

import IfStatement from './statements/IfStatement';
builders.set('IfStatement', IfStatement);

import ImportCall from './modules/ImportCall';
builders.set('ImportCall', ImportCall);

import ImportDeclaration from './modules/ImportDeclaration';
builders.set('ImportDeclaration', ImportDeclaration);

import ImportDefaultSpecifier from './modules/ImportDefaultSpecifier';
builders.set('ImportDefaultSpecifier', ImportDefaultSpecifier);

import ImportNamespaceSpecifier from './modules/ImportNamespaceSpecifier';
builders.set('ImportNamespaceSpecifier', ImportNamespaceSpecifier);

import ImportSpecifier from './modules/ImportSpecifier';
builders.set('ImportSpecifier', ImportSpecifier);

import ImportSpecifierLocal from './modules/ImportSpecifierLocal';
builders.set('ImportSpecifierLocal', ImportSpecifierLocal);

import InterpreterDirective from './core/InterpreterDirective';
builders.set('InterpreterDirective', InterpreterDirective);

import IntersectionTypeAnnotation from './types/IntersectionTypeAnnotation';
builders.set('IntersectionTypeAnnotation', IntersectionTypeAnnotation);

import JSXAttribute from './jsx/JSXAttribute';
builders.set('JSXAttribute', JSXAttribute);

import JSXElement from './jsx/JSXElement';
builders.set('JSXElement', JSXElement);

import JSXEmptyExpression from './jsx/JSXEmptyExpression';
builders.set('JSXEmptyExpression', JSXEmptyExpression);

import JSXExpressionContainer from './jsx/JSXExpressionContainer';
builders.set('JSXExpressionContainer', JSXExpressionContainer);

import JSXFragment from './jsx/JSXFragment';
builders.set('JSXFragment', JSXFragment);

import JSXIdentifier from './jsx/JSXIdentifier';
builders.set('JSXIdentifier', JSXIdentifier);

import JSXMemberExpression from './jsx/JSXMemberExpression';
builders.set('JSXMemberExpression', JSXMemberExpression);

import JSXNamespacedName from './jsx/JSXNamespacedName';
builders.set('JSXNamespacedName', JSXNamespacedName);

import JSXReferenceIdentifier from './jsx/JSXReferenceIdentifier';
builders.set('JSXReferenceIdentifier', JSXReferenceIdentifier);

import JSXSpreadAttribute from './jsx/JSXSpreadAttribute';
builders.set('JSXSpreadAttribute', JSXSpreadAttribute);

import JSXSpreadChild from './jsx/JSXSpreadChild';
builders.set('JSXSpreadChild', JSXSpreadChild);

import JSXText from './jsx/JSXText';
builders.set('JSXText', JSXText);

import LabeledStatement from './statements/LabeledStatement';
builders.set('LabeledStatement', LabeledStatement);

import LogicalExpression from './expressions/LogicalExpression';
builders.set('LogicalExpression', LogicalExpression);

import MemberExpression from './expressions/MemberExpression';
builders.set('MemberExpression', MemberExpression);

import MetaProperty from './expressions/MetaProperty';
builders.set('MetaProperty', MetaProperty);

import MixedKeywordTypeAnnotation from './types/MixedKeywordTypeAnnotation';
builders.set('MixedKeywordTypeAnnotation', MixedKeywordTypeAnnotation);

import MockParent from './temp/MockParent';
builders.set('MockParent', MockParent);

import NeverKeywordTypeAnnotation from './types/NeverKeywordTypeAnnotation';
builders.set('NeverKeywordTypeAnnotation', NeverKeywordTypeAnnotation);

import NewExpression from './expressions/NewExpression';
builders.set('NewExpression', NewExpression);

import NullKeywordTypeAnnotation from './types/NullKeywordTypeAnnotation';
builders.set('NullKeywordTypeAnnotation', NullKeywordTypeAnnotation);

import NullLiteral from './literals/NullLiteral';
builders.set('NullLiteral', NullLiteral);

import NumberKeywordTypeAnnotation from './types/NumberKeywordTypeAnnotation';
builders.set('NumberKeywordTypeAnnotation', NumberKeywordTypeAnnotation);

import NumericLiteral from './literals/NumericLiteral';
builders.set('NumericLiteral', NumericLiteral);

import NumericLiteralTypeAnnotation from './types/NumericLiteralTypeAnnotation';
builders.set('NumericLiteralTypeAnnotation', NumericLiteralTypeAnnotation);

import ObjectExpression from './objects/ObjectExpression';
builders.set('ObjectExpression', ObjectExpression);

import ObjectKeywordTypeAnnotation from './types/ObjectKeywordTypeAnnotation';
builders.set('ObjectKeywordTypeAnnotation', ObjectKeywordTypeAnnotation);

import ObjectMethod from './objects/ObjectMethod';
builders.set('ObjectMethod', ObjectMethod);

import ObjectProperty from './objects/ObjectProperty';
builders.set('ObjectProperty', ObjectProperty);

import OptionalCallExpression from './expressions/OptionalCallExpression';
builders.set('OptionalCallExpression', OptionalCallExpression);

import PatternMeta from './patterns/PatternMeta';
builders.set('PatternMeta', PatternMeta);

import PrivateName from './classes/PrivateName';
builders.set('PrivateName', PrivateName);

import Program from './core/Program';
builders.set('Program', Program);

import ReferenceIdentifier from './expressions/ReferenceIdentifier';
builders.set('ReferenceIdentifier', ReferenceIdentifier);

import RegExpAlternation from './regex/RegExpAlternation';
builders.set('RegExpAlternation', RegExpAlternation);

import RegExpAnyCharacter from './regex/RegExpAnyCharacter';
builders.set('RegExpAnyCharacter', RegExpAnyCharacter);

import RegExpCharacter from './regex/RegExpCharacter';
builders.set('RegExpCharacter', RegExpCharacter);

import RegExpCharSet from './regex/RegExpCharSet';
builders.set('RegExpCharSet', RegExpCharSet);

import RegExpCharSetRange from './regex/RegExpCharSetRange';
builders.set('RegExpCharSetRange', RegExpCharSetRange);

import RegExpControlCharacter from './regex/RegExpControlCharacter';
builders.set('RegExpControlCharacter', RegExpControlCharacter);

import RegExpDigitCharacter from './regex/RegExpDigitCharacter';
builders.set('RegExpDigitCharacter', RegExpDigitCharacter);

import RegExpEndCharacter from './regex/RegExpEndCharacter';
builders.set('RegExpEndCharacter', RegExpEndCharacter);

import RegExpGroupCapture from './regex/RegExpGroupCapture';
builders.set('RegExpGroupCapture', RegExpGroupCapture);

import RegExpGroupNonCapture from './regex/RegExpGroupNonCapture';
builders.set('RegExpGroupNonCapture', RegExpGroupNonCapture);

import RegExpLiteral from './literals/RegExpLiteral';
builders.set('RegExpLiteral', RegExpLiteral);

import RegExpNamedBackReference from './regex/RegExpNamedBackReference';
builders.set('RegExpNamedBackReference', RegExpNamedBackReference);

import RegExpNonDigitCharacter from './regex/RegExpNonDigitCharacter';
builders.set('RegExpNonDigitCharacter', RegExpNonDigitCharacter);

import RegExpNonWhiteSpaceCharacter from './regex/RegExpNonWhiteSpaceCharacter';
builders.set('RegExpNonWhiteSpaceCharacter', RegExpNonWhiteSpaceCharacter);

import RegExpNonWordBoundaryCharacter from './regex/RegExpNonWordBoundaryCharacter';
builders.set('RegExpNonWordBoundaryCharacter', RegExpNonWordBoundaryCharacter);

import RegExpNonWordCharacter from './regex/RegExpNonWordCharacter';
builders.set('RegExpNonWordCharacter', RegExpNonWordCharacter);

import RegExpNumericBackReference from './regex/RegExpNumericBackReference';
builders.set('RegExpNumericBackReference', RegExpNumericBackReference);

import RegExpQuantified from './regex/RegExpQuantified';
builders.set('RegExpQuantified', RegExpQuantified);

import RegExpStartCharacter from './regex/RegExpStartCharacter';
builders.set('RegExpStartCharacter', RegExpStartCharacter);

import RegExpSubExpression from './regex/RegExpSubExpression';
builders.set('RegExpSubExpression', RegExpSubExpression);

import RegExpWhiteSpaceCharacter from './regex/RegExpWhiteSpaceCharacter';
builders.set('RegExpWhiteSpaceCharacter', RegExpWhiteSpaceCharacter);

import RegExpWordBoundaryCharacter from './regex/RegExpWordBoundaryCharacter';
builders.set('RegExpWordBoundaryCharacter', RegExpWordBoundaryCharacter);

import RegExpWordCharacter from './regex/RegExpWordCharacter';
builders.set('RegExpWordCharacter', RegExpWordCharacter);

import ReturnStatement from './statements/ReturnStatement';
builders.set('ReturnStatement', ReturnStatement);

import SequenceExpression from './expressions/SequenceExpression';
builders.set('SequenceExpression', SequenceExpression);

import SpreadElement from './auxiliary/SpreadElement';
builders.set('SpreadElement', SpreadElement);

import SpreadProperty from './objects/SpreadProperty';
builders.set('SpreadProperty', SpreadProperty);

import StaticMemberProperty from './auxiliary/StaticMemberProperty';
builders.set('StaticMemberProperty', StaticMemberProperty);

import StaticPropertyKey from './objects/StaticPropertyKey';
builders.set('StaticPropertyKey', StaticPropertyKey);

import StringKeywordTypeAnnotation from './types/StringKeywordTypeAnnotation';
builders.set('StringKeywordTypeAnnotation', StringKeywordTypeAnnotation);

import StringLiteral from './literals/StringLiteral';
builders.set('StringLiteral', StringLiteral);

import StringLiteralTypeAnnotation from './types/StringLiteralTypeAnnotation';
builders.set('StringLiteralTypeAnnotation', StringLiteralTypeAnnotation);

import Super from './expressions/Super';
builders.set('Super', Super);

import SwitchCase from './auxiliary/SwitchCase';
builders.set('SwitchCase', SwitchCase);

import SwitchStatement from './statements/SwitchStatement';
builders.set('SwitchStatement', SwitchStatement);

import SymbolKeywordTypeAnnotation from './types/SymbolKeywordTypeAnnotation';
builders.set('SymbolKeywordTypeAnnotation', SymbolKeywordTypeAnnotation);

import TaggedTemplateExpression from './expressions/TaggedTemplateExpression';
builders.set('TaggedTemplateExpression', TaggedTemplateExpression);

import TemplateElement from './auxiliary/TemplateElement';
builders.set('TemplateElement', TemplateElement);

import TemplateLiteral from './literals/TemplateLiteral';
builders.set('TemplateLiteral', TemplateLiteral);

import TemplateLiteralTypeAnnotation from './types/TemplateLiteralTypeAnnotation';
builders.set('TemplateLiteralTypeAnnotation', TemplateLiteralTypeAnnotation);

import ThisExpression from './expressions/ThisExpression';
builders.set('ThisExpression', ThisExpression);

import ThrowStatement from './statements/ThrowStatement';
builders.set('ThrowStatement', ThrowStatement);

import TryStatement from './statements/TryStatement';
builders.set('TryStatement', TryStatement);

import TSArrayType from './typescript/TSArrayType';
builders.set('TSArrayType', TSArrayType);

import TSAsExpression from './typescript/TSAsExpression';
builders.set('TSAsExpression', TSAsExpression);

import TSAssignmentAsExpression from './typescript/TSAssignmentAsExpression';
builders.set('TSAssignmentAsExpression', TSAssignmentAsExpression);

import TSAssignmentNonNullExpression from './typescript/TSAssignmentNonNullExpression';
builders.set('TSAssignmentNonNullExpression', TSAssignmentNonNullExpression);

import TSAssignmentTypeAssertion from './typescript/TSAssignmentTypeAssertion';
builders.set('TSAssignmentTypeAssertion', TSAssignmentTypeAssertion);

import TSCallSignatureDeclaration from './typescript/TSCallSignatureDeclaration';
builders.set('TSCallSignatureDeclaration', TSCallSignatureDeclaration);

import TSConditionalType from './typescript/TSConditionalType';
builders.set('TSConditionalType', TSConditionalType);

import TSConstructorType from './typescript/TSConstructorType';
builders.set('TSConstructorType', TSConstructorType);

import TSConstructSignatureDeclaration from './typescript/TSConstructSignatureDeclaration';
builders.set('TSConstructSignatureDeclaration', TSConstructSignatureDeclaration);

import TSDeclareFunction from './typescript/TSDeclareFunction';
builders.set('TSDeclareFunction', TSDeclareFunction);

import TSDeclareMethod from './typescript/TSDeclareMethod';
builders.set('TSDeclareMethod', TSDeclareMethod);

import TSEnumDeclaration from './typescript/TSEnumDeclaration';
builders.set('TSEnumDeclaration', TSEnumDeclaration);

import TSEnumMember from './typescript/TSEnumMember';
builders.set('TSEnumMember', TSEnumMember);

import TSExportAssignment from './typescript/TSExportAssignment';
builders.set('TSExportAssignment', TSExportAssignment);

import TSExpressionWithTypeArguments from './typescript/TSExpressionWithTypeArguments';
builders.set('TSExpressionWithTypeArguments', TSExpressionWithTypeArguments);

import TSExternalModuleReference from './typescript/TSExternalModuleReference';
builders.set('TSExternalModuleReference', TSExternalModuleReference);

import TSFunctionType from './typescript/TSFunctionType';
builders.set('TSFunctionType', TSFunctionType);

import TSImportEqualsDeclaration from './typescript/TSImportEqualsDeclaration';
builders.set('TSImportEqualsDeclaration', TSImportEqualsDeclaration);

import TSImportType from './typescript/TSImportType';
builders.set('TSImportType', TSImportType);

import TSIndexedAccessType from './typescript/TSIndexedAccessType';
builders.set('TSIndexedAccessType', TSIndexedAccessType);

import TSIndexSignature from './typescript/TSIndexSignature';
builders.set('TSIndexSignature', TSIndexSignature);

import TSInferType from './typescript/TSInferType';
builders.set('TSInferType', TSInferType);

import TSInterfaceBody from './typescript/TSInterfaceBody';
builders.set('TSInterfaceBody', TSInterfaceBody);

import TSInterfaceDeclaration from './typescript/TSInterfaceDeclaration';
builders.set('TSInterfaceDeclaration', TSInterfaceDeclaration);

import TSMappedType from './typescript/TSMappedType';
builders.set('TSMappedType', TSMappedType);

import TSMethodSignature from './typescript/TSMethodSignature';
builders.set('TSMethodSignature', TSMethodSignature);

import TSModuleBlock from './typescript/TSModuleBlock';
builders.set('TSModuleBlock', TSModuleBlock);

import TSModuleDeclaration from './typescript/TSModuleDeclaration';
builders.set('TSModuleDeclaration', TSModuleDeclaration);

import TSNamespaceExportDeclaration from './typescript/TSNamespaceExportDeclaration';
builders.set('TSNamespaceExportDeclaration', TSNamespaceExportDeclaration);

import TSNonNullExpression from './typescript/TSNonNullExpression';
builders.set('TSNonNullExpression', TSNonNullExpression);

import TSOptionalType from './typescript/TSOptionalType';
builders.set('TSOptionalType', TSOptionalType);

import TSParenthesizedType from './typescript/TSParenthesizedType';
builders.set('TSParenthesizedType', TSParenthesizedType);

import TSPropertySignature from './typescript/TSPropertySignature';
builders.set('TSPropertySignature', TSPropertySignature);

import TSQualifiedName from './typescript/TSQualifiedName';
builders.set('TSQualifiedName', TSQualifiedName);

import TSSignatureDeclarationMeta from './typescript/TSSignatureDeclarationMeta';
builders.set('TSSignatureDeclarationMeta', TSSignatureDeclarationMeta);

import TSThisType from './typescript/TSThisType';
builders.set('TSThisType', TSThisType);

import TSTupleType from './typescript/TSTupleType';
builders.set('TSTupleType', TSTupleType);

import TSTypeAssertion from './typescript/TSTypeAssertion';
builders.set('TSTypeAssertion', TSTypeAssertion);

import TSTypeLiteral from './typescript/TSTypeLiteral';
builders.set('TSTypeLiteral', TSTypeLiteral);

import TSTypeOperator from './typescript/TSTypeOperator';
builders.set('TSTypeOperator', TSTypeOperator);

import TSTypeParameter from './typescript/TSTypeParameter';
builders.set('TSTypeParameter', TSTypeParameter);

import TSTypeParameterDeclaration from './typescript/TSTypeParameterDeclaration';
builders.set('TSTypeParameterDeclaration', TSTypeParameterDeclaration);

import TSTypeParameterInstantiation from './typescript/TSTypeParameterInstantiation';
builders.set('TSTypeParameterInstantiation', TSTypeParameterInstantiation);

import TSTypePredicate from './typescript/TSTypePredicate';
builders.set('TSTypePredicate', TSTypePredicate);

import TSTypeQuery from './typescript/TSTypeQuery';
builders.set('TSTypeQuery', TSTypeQuery);

import TSTypeReference from './typescript/TSTypeReference';
builders.set('TSTypeReference', TSTypeReference);

import TypeAliasTypeAnnotation from './types/TypeAliasTypeAnnotation';
builders.set('TypeAliasTypeAnnotation', TypeAliasTypeAnnotation);

import UnaryExpression from './expressions/UnaryExpression';
builders.set('UnaryExpression', UnaryExpression);

import UndefinedKeywordTypeAnnotation from './types/UndefinedKeywordTypeAnnotation';
builders.set('UndefinedKeywordTypeAnnotation', UndefinedKeywordTypeAnnotation);

import UnionTypeAnnotation from './types/UnionTypeAnnotation';
builders.set('UnionTypeAnnotation', UnionTypeAnnotation);

import UnknownKeywordTypeAnnotation from './types/UnknownKeywordTypeAnnotation';
builders.set('UnknownKeywordTypeAnnotation', UnknownKeywordTypeAnnotation);

import UpdateExpression from './expressions/UpdateExpression';
builders.set('UpdateExpression', UpdateExpression);

import VariableDeclaration from './auxiliary/VariableDeclaration';
builders.set('VariableDeclaration', VariableDeclaration);

import VariableDeclarationStatement from './statements/VariableDeclarationStatement';
builders.set('VariableDeclarationStatement', VariableDeclarationStatement);

import VariableDeclarator from './auxiliary/VariableDeclarator';
builders.set('VariableDeclarator', VariableDeclarator);

import VoidKeywordTypeAnnotation from './types/VoidKeywordTypeAnnotation';
builders.set('VoidKeywordTypeAnnotation', VoidKeywordTypeAnnotation);

import WhileStatement from './statements/WhileStatement';
builders.set('WhileStatement', WhileStatement);

import WithStatement from './statements/WithStatement';
builders.set('WithStatement', WithStatement);

import YieldExpression from './expressions/YieldExpression';
builders.set('YieldExpression', YieldExpression);
