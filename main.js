import './style.scss'
import * as bootstrap from "bootstrap";



const Sidebar = document.querySelector(".SideBar");
const SideBtn = document.getElementById("SideList-Btn");
SideBtn.addEventListener("click",()=>{
    Sidebar.classList.toggle("show")
})

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Month of Salary',
            //   barPercentage: 10,
            paddding:3,
            barThickness: 15,
            maxBarThickness: 30,
            minBarLength: 4,
            data: [700, 500, 300, 500, 300, 100],
            backgroundColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 3,
            
        },
    ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            }
        },
        responsive: true,
    }
});

let ArrowNav = document.querySelectorAll(".Arrow-nav");


[...ArrowNav].map((i) => {
    i.addEventListener("click", function (e) {
        if(e.target.closest(".SideBarLink").lastElementChild.classList.contains("Arrow-up")){
            e.target.closest(".SideBarLink").lastElementChild.classList.remove("Arrow-up");
           }else{
            e.target.closest(".SideBarLink").lastElementChild.classList.add("Arrow-up")
           }
    })
})








