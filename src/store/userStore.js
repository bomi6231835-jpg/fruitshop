import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useUserStore = create(
    immer((set) => ({
        user: { name: "유비", age: 20 },

        changeName:  ()=> {
            set((state) => {
                state.user.name = '관우'
            })
        },
        increase: (amount) => {
            set((state) => {
                state.user.age += amount;
            })
        }
    }))
)