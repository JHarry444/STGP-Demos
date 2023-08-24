let input = 0;

while (!input) {
    input = prompt("Gimme a number:");
}

do {
    input = parseFloat(prompt("Gimme a number:"));
} while(!input)

// starts at one and ends at 29, incrementing by 1 each time
for (let i = 1; i < 30; i++) {
    if (i % 3 === 0) continue; // skips any multiple of 3
    if (i > 20) break; // stops early after number 20
    console.log("I: ", i);
}

// starts at 50 and ends at 0, decreasing by 5 each time
for (let i = 50; i >=0; i-=5) {
    console.log("I: ", i);
}