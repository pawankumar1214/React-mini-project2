import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img:"https://imgs.search.brave.com/aVOIyRgyis7xm-d5RCbqctz8W7nnithRcZ2TnwsT6BE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2RmLzY3/LzQ2L2RmNjc0NmU5/ZmRiZjA2OWJhNGU2/MTcwY2VlODcwNDJj/LmpwZw",
      intro:"",
      tag:"Satisfied"
    },
    {
      img:"https://imgs.search.brave.com/epkgPtYIegjDQkFBfuSpwpp6o5VjxNCj8eaPvzT64PQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ViL2Jl/L2EwL2ViYmVhMDc4/M2Y3MzhhMjEyMzhi/M2I1YzdmY2E2N2Q3/LmpwZw",
      intro:"",
      tag:"Underserved"
    },
    {
      img:"https://imgs.search.brave.com/Q8UOud0xcmaQOnF7dXMNLdoXwq8B9kKNt2j58O0BPwU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2M0LzYx/LzJkL2M0NjEyZDc3/NWUwOTViOTQ5MzFm/NzVhYzc3Nzg0MmU2/LmpwZw",
      intro:"",
      tag:"Underbanked"
    },
    {
      img:"https://imgs.search.brave.com/dpk6Kh-YsrgWsH55yJ5qD0aJT2s5nHFy9TsVA4_rSM8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY1L2Zj/L2IwLzY1ZmNiMGYw/MGNkMmRiOGYwMjMy/YzNlMDBlYTQ5NzQy/LmpwZw",
      intro:"",
      tag:"Ignored"
    },
    {
      img:"https://imgs.search.brave.com/Y_w2O-etFTvi7fjjBQ0fuu9UKgQxJr3kxuFWM7kLIeE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzBiL2Uy/LzVlLzBiZTI1ZTQ0/YmI5ZTFkMTZjNGNh/YWRiZjk0OWY0NDgy/LmpwZw",
      intro:"",
      tag:"Neglected"
    },
    {
      img:"https://imgs.search.brave.com/lf7nnTI-CkdMT7J0bA69t8lcD_F7ZL8MBe-nX8ZzogE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y3L2Yy/LzBhL2Y3ZjIwYWE5/ZjY2MGQzMGYwMmYz/NGE4MDJlYjRkYTQy/LmpwZw",
      intro:"",
      tag:"Sweetly Handled"
    },
    {
      img:"https://imgs.search.brave.com/9BcREzIFmYyNL6c3kBZmE_zJVaSP3yfDQ3gMUdNFORY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzZiLzY5/L2VkLzZiNjllZDUx/N2Q3YTMwZjYyNDU5/ZWIxZTNjMzgwM2Y1/LmpwZw",
      intro:"",
      tag:"Arrogant"
    },
    {
      img:"https://imgs.search.brave.com/Im4JEi_B37gIGYP1fZV7lKQuVu4RWUMlvuaffDiyrzo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2EyL2Fj/LzUwL2EyYWM1MGQw/OTBjMDIxZGExMjM4/NzUyYjRhZWQxNGZl/LmpwZw",
      intro:"",
      tag:"Kicked Out"
    },
    {
      img:"https://imgs.search.brave.com/eMTM_2KTtHHZIU3kRwTuF4SaduZGhG6972kfgqxjimA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzA5LzIw/L2Q1LzA5MjBkNWNm/OThlYzk5MzA4MDU2/ZGNlZTU1ZWVjNmE4/LmpwZw",
      intro:"",
      tag:"Rude"
    },
    {
      img:"https://imgs.search.brave.com/SE-_Gq7a0Vb9_xrZsPWxsCsFHDMJhvtjcfygMsmUjUA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzVmLzRh/LzUxLzVmNGE1MWYy/NDc4NWYxMjk0ZjBi/ZDliMTVlMjRmYWVm/LmpwZw",
      intro:"",
      tag:"Insulted"
    }
  ]

  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App

