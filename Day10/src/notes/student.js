import { create } from "zustand";

const studentStore = create((set, get) => {
  return {
    name: "Ahmad Fayyaz",
    age: 22,
    marks: 90,
    incrementAge: () => {
      console.log("Incrementing age...");
      set((state) => {
        return { age: state.age + 1 };
      });
    },
    incrementAge: () => set((state) => ({ age: state.age + 1 })),

    CapitializeName: () => {
      console.log("Capitilizing name...");
      const { name } = get();
      const capitailized = name.charAt(0).toUpperCase() + name.slice(1);
      set((state) => {
        return { name: capitailized };
      });
    },

    resetStudent: () => {
      console.log("Resetting student...");
      set((state) => {
        return {
          name: "Ahmad Fayyaz",
          age: 22,
          marks: 90,
        };
      });
    },
  };
});

export default studentStore;
