import { createSelector } from "@reduxjs/toolkit";

export const selectFilteredBlogs = createSelector(
  (state) => state.blog.data,
  (state) => state.blog.searchTerm,
  (data, searchTerm) => {
    if (!searchTerm.trim()) {
      return data;
    }

    const lowercasedTerm = searchTerm.toLowerCase();
    return data.filter(
      (blog) =>
        blog.title.toLowerCase().includes(lowercasedTerm) ||
        blog.author.toLowerCase().includes(lowercasedTerm) ||
        blog.content.toLowerCase().includes(lowercasedTerm)
    );
  }
);
