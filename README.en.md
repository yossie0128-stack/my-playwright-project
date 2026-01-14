# my-playwright-project  
A practical end-to-end (E2E) test automation project built with **Playwright × TypeScript**.  
This project focuses not only on UI automation, but also on **reducing operational costs** and **ensuring test reliability**, aiming to provide a structure that can be introduced and maintained immediately in real-world development environments.

---

## 🎯 Project Goals
In web application quality assurance, the biggest challenges in automated testing are **flaky tests** and **long execution time**.  
This project incorporates proven design patterns—such as **Page Object Model (POM)**, **retry strategies**, and **parallel execution**—to address these issues effectively.

---

## 📁 Directory Structure
![A screeshot of Automatic test failure](./images/screen-trace.png)

my-playwright-project/ ├── tests/  # UI tests using POM (feature-based / scenario-based) 
　　　　　　　　　　　　　├── test/  # Advanced tests (API, downloads, iframe, etc.) 
├── pages/  # Page Object Model (elements & interaction logic) 
├── components/  # Shared components (search button, tab blocks, etc.) 
├── data/ # Test data (environment variables, expected values) 
├── playwright.config.ts  # Execution strategy (retry, parallelism, timeout) 
└── .github/workflows/    # CI pipeline (GitHub Actions)

---

## 🛠 Key Implementation Highlights

### 1. Robust Page Object Model (POM)
To minimize maintenance costs when UI changes occur, element selectors and interaction logic are fully separated.  
This ensures a clean, scalable, and maintainable codebase.

### 2. Flaky Test Prevention
To avoid false negatives caused by network instability or rendering delays, the CI environment includes **automatic retries (up to 2 times)**.  
This significantly improves test stability and reduces investigation time for developers.

### 3. Optimized Execution Speed & Scalability
Parallel execution is tuned for both local and CI environments by adjusting worker counts.

Scalability considerations:
- Currently optimized for GitHub Actions free-tier resources  
- Designed to support **Playwright sharding** for distributed execution across multiple machines in larger projects

### 4. Hybrid Testing: API + UI
The project includes both UI and API tests.  
Test data setup and cleanup are performed via API, improving overall E2E test speed and reliability.

### 5. Enhanced Debugging Experience
On test failures, the following artifacts are automatically collected:
- Screenshots  
- Video recordings  
- Playwright Trace Viewer files  

These enable fast and accurate debugging, especially in CI environments.

---

## 🧪 Test Coverage

### UI Tests
- Page navigation  
- Form validation  
- Complex form interactions  
- Dynamic element handling  

### API Tests
- Response validation  
- Status code checks  
- Schema validation  

### Advanced Scenarios
- Interacting with elements inside iframes  
- File download verification  

---

## 🧩 Tech Stack

- **Framework:** Playwright (TypeScript)  
- **Language:** TypeScript (type-safe test implementation)  
- **CI/CD:** GitHub Actions  
- **Reporting:** Playwright HTML Report / Trace Viewer  

---

## ▶️ Setup & Execution

```bash
# Install dependencies
npm install
npx playwright install

# Run all tests
npx playwright test

# View test report
npx playwright show-report



💡 Design Philosophy
This project is built based on the structure of the official Playwright documentation,
with a focus on analyzing and testing real-world web application behavior.
It reflects the mindset required for automation engineers:
- Why this design is chosen
- What is necessary to prevent flaky tests
- How to build a maintainable and scalable automation system
