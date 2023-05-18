export type ClassType = string | string[]
export type StyleType = string | string[]
export type AttrType<ElementType extends Element = Element> = Record<
    string | keyof ElementType,
    ElementType[keyof ElementType]
>

export const ELEMENT_CHILDREN_KEY = 'children'

export interface HuiElement<ElementType extends Element = Element> {
    id: string
    component: string
    direction?: 'horizontal' | 'vertical'
    layoutClass?: ClassType
    // extraStyle?: StyleType
    class?: ClassType
    style?: StyleType
    attr?: AttrType<ElementType>
    [ELEMENT_CHILDREN_KEY]?: HuiElement[]
}

export type Component = HuiElement
