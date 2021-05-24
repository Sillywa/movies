export function getMovies(page_num: number, page_size: number=10):Promise<any> {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:5001/get_movies?page_num=${page_num}&page_size=${page_size}`)
      .then((res) => res.json())
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
}
export function getDetail(id: number):Promise<any> {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:5001/get_detail?id=${id}`)
      .then((res) => res.json())
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  })
}