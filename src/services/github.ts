const API_GITHUB = "https://api.github.com/users/MatheusRic/repos";

export async function getRepositorys() {
  try {
    const response = await fetch(API_GITHUB);
    const data = await response.json();
    return data;
  } catch (error) {
    return undefined;
  }
}
