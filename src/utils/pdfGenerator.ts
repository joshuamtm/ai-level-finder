import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { AssessmentResult } from '../types';
import { levels } from '../data/levels';

export const generatePDF = async (result: AssessmentResult): Promise<void> => {
  try {
    // Create a temporary container for PDF content
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    container.style.top = '0';
    container.style.width = '800px';
    container.style.backgroundColor = 'white';
    container.style.fontFamily = 'Arial, sans-serif';
    document.body.appendChild(container);

    const currentLevel = levels[result.currentLevel];
    const percentage = Math.round((result.score / result.maxScore) * 100);

    // Build the PDF content HTML
    container.innerHTML = `
      <div style="padding: 40px; max-width: 720px;">
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 40px; border-bottom: 3px solid ${currentLevel.color}; padding-bottom: 20px;">
          <h1 style="color: #1f2937; font-size: 32px; margin: 0 0 10px 0; font-weight: bold;">AI Level Finder</h1>
          <h2 style="color: #6b7280; font-size: 20px; margin: 0; font-weight: normal;">Assessment Results Report</h2>
        </div>

        <!-- Current Level Section -->
        <div style="margin-bottom: 40px; padding: 30px; border: 2px solid ${currentLevel.color}; border-radius: 12px; background-color: #f9fafb;">
          <div style="text-align: center; margin-bottom: 30px;">
            <div style="display: inline-block; width: 120px; height: 120px; border: 8px solid ${currentLevel.color}; border-radius: 50%; position: relative; margin-bottom: 20px;">
              <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center;">
                <div style="font-size: 36px; font-weight: bold; color: ${currentLevel.color}; margin-bottom: 5px;">${result.currentLevel}</div>
                <div style="font-size: 14px; color: #6b7280;">${percentage}%</div>
              </div>
            </div>
            <h2 style="color: ${currentLevel.color}; font-size: 28px; margin: 0 0 10px 0; font-weight: bold;">Level ${currentLevel.level}: ${currentLevel.name}</h2>
            <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0;">${currentLevel.description}</p>
          </div>
          
          <div style="margin-top: 30px;">
            <h3 style="color: #1f2937; font-size: 18px; margin: 0 0 15px 0; font-weight: bold;">Key Characteristics:</h3>
            <ul style="color: #4b5563; font-size: 14px; line-height: 1.6; margin: 0; padding-left: 20px;">
              ${currentLevel.characteristics.map(char => `<li style="margin-bottom: 8px;">${char}</li>`).join('')}
            </ul>
          </div>
        </div>

        <!-- Score Breakdown -->
        <div style="margin-bottom: 40px;">
          <h2 style="color: #1f2937; font-size: 24px; margin: 0 0 20px 0; font-weight: bold;">Score Breakdown</h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <div style="margin-bottom: 15px;">
              <strong style="color: #1f2937;">Overall Score:</strong> ${result.score}/${result.maxScore} (${percentage}%)
            </div>
            <div style="margin-top: 20px;">
              <h3 style="color: #1f2937; font-size: 16px; margin: 0 0 15px 0; font-weight: bold;">Category Scores:</h3>
              ${result.categoryScores.map(category => `
                <div style="margin-bottom: 12px;">
                  <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <span style="color: #4b5563; font-weight: 500;">${category.category}</span>
                    <span style="color: #6b7280;">${Math.round(category.percentage)}%</span>
                  </div>
                  <div style="width: 100%; height: 8px; background-color: #e5e7eb; border-radius: 4px;">
                    <div style="width: ${category.percentage}%; height: 100%; background-color: #3b82f6; border-radius: 4px;"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Action Plan -->
        <div style="margin-bottom: 40px;">
          <h2 style="color: #1f2937; font-size: 24px; margin: 0 0 20px 0; font-weight: bold;">Recommended Action Plan</h2>
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; border: 1px solid #0ea5e9;">
            <ol style="color: #4b5563; font-size: 14px; line-height: 1.6; margin: 0; padding-left: 20px;">
              ${result.recommendations.map(rec => `<li style="margin-bottom: 10px;">${rec}</li>`).join('')}
            </ol>
          </div>
        </div>

        <!-- Next Level Benefits -->
        ${result.nextLevelBenefits && result.nextLevelBenefits.length > 0 ? `
          <div style="margin-bottom: 40px;">
            <h2 style="color: #1f2937; font-size: 24px; margin: 0 0 20px 0; font-weight: bold;">Benefits of Reaching Level ${result.currentLevel + 1}</h2>
            <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; border: 1px solid #22c55e;">
              ${result.nextLevelBenefits.map(benefit => `
                <div style="margin-bottom: 15px;">
                  <div style="font-weight: bold; color: #16a34a; margin-bottom: 3px;">${benefit.metric}: ${benefit.value}</div>
                  <div style="color: #4b5563; font-size: 14px;">${benefit.description}</div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Footer -->
        <div style="margin-top: 60px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
          <p style="margin: 0 0 5px 0;">Generated by AI Level Finder for Nonprofits</p>
          <p style="margin: 0 0 10px 0;">Based on Nate B. Jones's AI Readiness Framework</p>
          <p style="margin: 0;">Learn more: <span style="color: #3b82f6;">https://natesnewsletter.substack.com/</span></p>
          <p style="margin: 10px 0 0 0; font-size: 11px;">Generated on ${new Date().toLocaleDateString()}</p>
        </div>
      </div>
    `;

    // Convert HTML to canvas
    const canvas = await html2canvas(container, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      width: 800,
      height: container.scrollHeight
    });

    // Remove temporary container
    document.body.removeChild(container);

    // Create PDF
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    // Add the image to PDF
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Add new pages if content is longer than one page
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    // Save the PDF
    pdf.save(`ai-level-finder-results-level-${result.currentLevel}.pdf`);

  } catch (error) {
    console.error('Error generating PDF:', error);
    // Fallback to text version
    const currentLevel = levels[result.currentLevel];
    const percentage = Math.round((result.score / result.maxScore) * 100);
    
    const content = `
AI LEVEL FINDER ASSESSMENT RESULTS
=====================================

ORGANIZATION AI MATURITY LEVEL: ${result.currentLevel}
Level Name: ${currentLevel.name}
Score: ${result.score}/${result.maxScore} (${percentage}%)

DESCRIPTION:
${currentLevel.description}

KEY CHARACTERISTICS:
${currentLevel.characteristics.map(char => `• ${char}`).join('\n')}

ACTION PLAN:
${result.recommendations.map((rec, idx) => `${idx + 1}. ${rec}`).join('\n')}

CATEGORY SCORES:
${result.categoryScores.map(cat => `${cat.category}: ${Math.round(cat.percentage)}%`).join('\n')}

Generated by AI Level Finder for Nonprofits
Based on Nate B. Jones's AI Readiness Framework
Learn more: https://natesnewsletter.substack.com/
`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai-level-finder-results-level-${result.currentLevel}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
};