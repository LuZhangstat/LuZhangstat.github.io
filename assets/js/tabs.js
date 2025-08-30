// Tab switching functionality for publications page
console.log('=== TABS.JS LOADED ===');

// Simple and direct tab switching function
function showTab(tabName) {
  console.log('=== TAB SWITCH ATTEMPT ===');
  console.log('Target tab:', tabName);
  
  // Test if we can find elements at all
  var allButtons = document.querySelectorAll('button');
  console.log('Total buttons found:', allButtons.length);
  
  var tabButtons = document.querySelectorAll('button.tab-button');
  console.log('Tab buttons found:', tabButtons.length);
  
  var tabContents = document.querySelectorAll('div.tab-content');
  console.log('Tab contents found:', tabContents.length);
  
  // Try to remove active class from all buttons first
  tabButtons.forEach(function(button, i) {
    console.log('Button', i + 1, 'before:', button.className);
    button.classList.remove('active');
    console.log('Button', i + 1, 'after:', button.className);
  });
  
  // Try to remove active class from all content divs
  tabContents.forEach(function(tab, i) {
    console.log('Tab', i + 1, 'before:', tab.className);
    tab.classList.remove('active');
    console.log('Tab', i + 1, 'after:', tab.className);
  });
  
  // Try to show target tab
  var targetTab = document.getElementById(tabName);
  if (targetTab) {
    targetTab.classList.add('active');
    console.log('✅ Added active to tab:', tabName);
  } else {
    console.error('❌ Tab not found:', tabName);
  }
  
  // Try to activate clicked button
  if (event && event.target) {
    event.target.classList.add('active');
    console.log('✅ Added active to button:', event.target.textContent);
  }
  
  console.log('=== TAB SWITCH COMPLETE ===');
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
  console.log('=== DOM LOADED ===');
  
  // Test if we can find the tab container
  var tabContainer = document.querySelector('.publication-tabs');
  if (tabContainer) {
    console.log('✅ Found tab container');
  } else {
    console.log('❌ No tab container found');
  }
  
  // Test if we can find buttons
  var buttons = document.querySelectorAll('button.tab-button');
  console.log('Found', buttons.length, 'tab buttons');
  
  // Test if we can find content divs
  var contents = document.querySelectorAll('div.tab-content');
  console.log('Found', contents.length, 'tab content divs');
  
  // Log all button classes
  buttons.forEach(function(btn, i) {
    console.log('Button', i + 1, ':', btn.textContent, 'Classes:', btn.className);
  });
  
  // Log all content classes
  contents.forEach(function(content, i) {
    console.log('Content', i + 1, ':', content.id, 'Classes:', content.className);
  });
});

// Add simple click test to each button
document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('button.tab-button');
  buttons.forEach(function(button, i) {
    button.addEventListener('click', function(e) {
      console.log('Button clicked:', this.textContent);
      console.log('Button classes before:', this.className);
      
      // Remove active from all buttons
      document.querySelectorAll('button.tab-button').forEach(function(btn) {
        btn.classList.remove('active');
      });
      
      // Add active to this button
      this.classList.add('active');
      console.log('Button classes after:', this.className);
      
      // Get tab name from onclick
      var onclick = this.getAttribute('onclick');
      if (onclick) {
        var match = onclick.match(/showTab\('([^']+)'\)/);
        if (match) {
          showTab(match[1]);
        }
      }
    });
  });
}); 