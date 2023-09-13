export function generatePathsFromIds(ids) {
    return ids.map((id) => ({
      params: { id },
    }));
  }