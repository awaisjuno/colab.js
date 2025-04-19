export async function render(Component) {
    return typeof Component === 'function' ? Component() : Component;
}