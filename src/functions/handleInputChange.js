export const handleInputChange = (e, setter) => {
    const { id, value } = e.currentTarget;
    setter((prev) => ({ ...prev, [id]: value }));
};
